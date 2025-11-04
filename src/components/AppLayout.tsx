'use client';

import React, { useEffect, useRef, memo, useState } from 'react';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import TopBar from './TopBar';
import MainNavRail from './MainNavRail';
import SubNavigation from './SubNavigation';
import { useNavigation } from '@/contexts/NavigationContext';
import { SubNavSection } from '@/config/navigation';
import { tokens } from '@/theme/theme';

// Animation constants - matching top-bar collapse timing
const TRANSITION_DURATION = 250; // 250ms as per spec
const TRANSITION_EASING = 'cubic-bezier(0.4, 0.0, 0.2, 1)'; // Material Design standard-easing
const CONTENT_FADE_DURATION = 220; // Slightly faster for perceived speed

type AppLayoutProps = {
  children: React.ReactNode;
  subNavSections?: SubNavSection[];
  subNavTitle?: string;
  basePath?: string;
};

function AppLayout({ children, subNavSections, subNavTitle, basePath }: AppLayoutProps) {
  const pathname = usePathname();
  const { subNavOpen, setCurrentArea } = useNavigation();
  const hasSubNav = Boolean(subNavSections && subNavTitle && basePath);
  const prevHasSubNavRef = useRef<boolean>(hasSubNav);
  const prevBasePathRef = useRef<string | undefined>(undefined);
  const prevPathnameRef = useRef<string>(pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSubNav, setShowSubNav] = useState(hasSubNav);
  const [contentKey, setContentKey] = useState(0);
  const transitionTimeoutRef = useRef<NodeJS.Timeout>();
  const contentTransitionTimeoutRef = useRef<NodeJS.Timeout>();
  
  // Store the last valid subnav props during transitions
  const lastSubNavPropsRef = useRef<{
    sections: SubNavSection[];
    title: string;
    basePath: string;
  } | null>(null);
  
  if (hasSubNav && subNavSections && subNavTitle && basePath) {
    lastSubNavPropsRef.current = { sections: subNavSections, title: subNavTitle, basePath };
  }

  // Track subnav transitions (Dashboard <-> sections with subnav)
  useEffect(() => {
    const hadSubNav = prevHasSubNavRef.current;
    const nowHasSubNav = hasSubNav;
    
    // Transition is happening when subnav state changes
    if (hadSubNav !== nowHasSubNav) {
      setIsTransitioning(true);
      
      // If we're showing the subnav, show it immediately
      if (nowHasSubNav) {
        setShowSubNav(true);
      }
      
      // Clear any existing timeout
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      
      // Match the transition duration plus a small buffer
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        // If we're hiding the subnav, hide it after the animation completes
        if (!nowHasSubNav) {
          setShowSubNav(false);
        }
      }, TRANSITION_DURATION + 20);
    }
    
    prevHasSubNavRef.current = nowHasSubNav;
    
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [hasSubNav]);

  // Track route changes for content crossfade
  useEffect(() => {
    if (pathname !== prevPathnameRef.current) {
      // Trigger content fade transition
      setIsTransitioning(true);
      setContentKey(prev => prev + 1);
      
      // Clear any existing content timeout
      if (contentTransitionTimeoutRef.current) {
        clearTimeout(contentTransitionTimeoutRef.current);
      }
      
      // Reset transition state after content fade completes
      contentTransitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, CONTENT_FADE_DURATION);
      
      prevPathnameRef.current = pathname;
    }
    
    return () => {
      if (contentTransitionTimeoutRef.current) {
        clearTimeout(contentTransitionTimeoutRef.current);
      }
    };
  }, [pathname]);

  // Track area changes and reset sub navigation sections - only when basePath actually changes
  useEffect(() => {
    if (basePath !== prevBasePathRef.current) {
      setCurrentArea(basePath || null);
      prevBasePathRef.current = basePath;
    }
  }, [basePath, setCurrentArea]);

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Main Rail - Fixed width, full height */}
      <MainNavRail />
      
      {/* Sub Navigation - Full height with smooth entry/exit animations */}
      <Box
        sx={{
          width: hasSubNav && subNavOpen ? 220 : 0,
          transition: `width ${TRANSITION_DURATION}ms ${TRANSITION_EASING}`,
          overflow: 'hidden',
          flexShrink: 0,
          position: 'relative',
          willChange: 'width', // Hint for GPU acceleration
        }}
      >
        {showSubNav && lastSubNavPropsRef.current && (
          <Box
            sx={{
              width: 220,
              transform: hasSubNav ? 'translateX(0)' : 'translateX(-100%)',
              opacity: hasSubNav ? 1 : 0,
              transition: `transform ${TRANSITION_DURATION}ms ${TRANSITION_EASING}, opacity ${TRANSITION_DURATION}ms ${TRANSITION_EASING}`,
              willChange: 'transform, opacity', // Hint for GPU acceleration
            }}
          >
            <SubNavigation 
              sections={lastSubNavPropsRef.current.sections} 
              title={lastSubNavPropsRef.current.title} 
              basePath={lastSubNavPropsRef.current.basePath}
            />
          </Box>
        )}
      </Box>
      
      {/* Main Column - Top bar + content with smooth transition */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          flex: 1, 
          overflow: 'hidden',
          position: 'relative',
          transition: 'margin-left 300ms ease-in-out',
        }}
      >
        {/* Top Bar */}
        <TopBar />
        
        {/* Main content with smooth crossfade */}
        <Box 
          key={contentKey}
          sx={{ 
            flex: 1, 
            overflow: 'auto',
            backgroundColor: tokens.colors.topBar,
            transition: `opacity ${CONTENT_FADE_DURATION}ms ${TRANSITION_EASING}`,
            opacity: isTransitioning ? 0 : 1,
            willChange: 'opacity', // Hint for GPU acceleration
            animation: `fadeIn ${CONTENT_FADE_DURATION}ms ${TRANSITION_EASING}`,
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default memo(AppLayout);
