'use client';

import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Box, Collapse, Typography } from '@mui/material';
import { ChevronRight } from 'lucide-react';
import { tokens } from '@/theme/theme';
import { SubNavSection, SubNavItem } from '@/config/navigation';
import { useNavigation } from '@/contexts/NavigationContext';

type SubNavigationProps = {
  sections: SubNavSection[];
  title: string;
  basePath: string;
};

function SubNavigation({ sections, title, basePath }: SubNavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { expandedSections, toggleSection } = useNavigation();

  // Memoize all routes for prefetching
  const allRoutes = useMemo(() => {
    const routes = [basePath];
    sections.forEach(section => {
      section.items.forEach(item => {
        routes.push(item.route);
      });
    });
    return routes;
  }, [sections, basePath]);

  // Prefetch all sub-navigation routes on mount for instant navigation
  useEffect(() => {
    allRoutes.forEach(route => {
      router.prefetch(route);
    });
  }, [allRoutes, router]);

  const handleItemClick = useCallback((route: string) => {
    router.push(route);
  }, [router]);

  const isActive = useCallback((route: string) => pathname === route, [pathname]);

  return (
    <Box
      sx={{
        width: 220,
        height: '100vh',
        backgroundColor: tokens.colors.navBackground,
        borderRight: `1px solid ${tokens.colors.border}`,
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        position: 'relative',
        zIndex: 5,
      }}
    >
      {/* Title of the sub navigation */}
      <Box
        sx={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          px: `${tokens.gutterX}px`,
          borderBottom: `1px solid ${tokens.colors.border}`,
          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 600,
            color: tokens.colors.primaryText,
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Sections Container */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          py: 3,
        }}
      >

      {/* Sections */}
      {sections.map((section) => {
        const isExpanded = expandedSections[section.id];
        const hasItems = section.items.length > 0;

        // Overview is a direct link
        if (section.id === 'overview') {
          const active = isActive(basePath);
          return (
            <Box
              key={section.id}
              onClick={() => handleItemClick(basePath)}
              sx={{
                px: 2, // 16px padding
                py: 1.25,
                cursor: 'pointer',
                backgroundColor: active ? tokens.colors.primaryActive : 'transparent',
                color: active ? tokens.colors.primary : tokens.colors.secondaryText,
                borderRadius: `${tokens.borderRadius}px`,
                mx: 1.5,
                '&:hover': { backgroundColor: tokens.colors.primaryHover },
                '&:focus-visible': {
                  outline: `2px solid ${tokens.colors.primary}`,
                  outlineOffset: -2,
                },
              }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleItemClick(basePath);
                }
              }}
            >
              <Typography 
                sx={{ 
                  fontSize: tokens.typography.body2, 
                  fontWeight: active ? 600 : 400,
                  color: 'inherit',
                }}
              >
                {section.label}
              </Typography>
            </Box>
          );
        }

        // Sections with items
        return (
          <Box key={section.id} sx={{ mb: 0.5 }}>
            <Box
              onClick={() => hasItems && toggleSection(section.id)}
              sx={{
                px: 2, // 16px padding
                py: 1.25, /*Padding between the sections*/
                mx: 1.5, /*Margin between the sections*/
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: hasItems ? 'pointer' : 'default',
                borderRadius: `${tokens.borderRadius}px`,
                '&:hover': hasItems ? { backgroundColor: tokens.colors.primaryHover } : {},
              }}
            >
              <Typography 
                sx={{ 
                  fontSize: tokens.typography.body2, 
                  color: tokens.colors.primaryText, 
                  fontWeight: 600,
                }}
              >
                {section.label}
              </Typography>
              {hasItems && (
                <Box
                  sx={{
                    display: 'flex',
                    color: tokens.colors.secondaryText,
                    transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease-in-out',
                  }}
                >
                  <ChevronRight size={tokens.iconSize} />
                </Box>
              )}
            </Box>
            {hasItems && (
              <Collapse 
                in={isExpanded}
                timeout={220}
                sx={{
                  '& .MuiCollapse-wrapperInner': {
                    transition: 'opacity 0.22s ease-in-out',
                  },
                }}
              >
                <Box sx={{ pl: 1.5 }}>
                  {section.items.map((item) => {
                    const active = isActive(item.route);
                    return (
                      <Box
                        key={item.id}
                        onClick={() => handleItemClick(item.route)}
                        sx={{
                          px: 2, // 16px padding
                          py: 1.25,
                          mx: 1.5,
                          cursor: 'pointer',
                          backgroundColor: active ? tokens.colors.primaryActive : 'transparent',
                          color: active ? tokens.colors.primary : tokens.colors.secondaryText,
                          borderRadius: `${tokens.borderRadius}px`,
                          '&:hover': { backgroundColor: tokens.colors.primaryHover },
                          '&:focus-visible': {
                            outline: `2px solid ${tokens.colors.primary}`,
                            outlineOffset: -2,
                          },
                        }}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleItemClick(item.route);
                          }
                        }}
                      >
                        <Typography 
                          sx={{ 
                            fontSize: tokens.typography.body2,
                            fontWeight: active ? 600 : 400,
                            color: 'inherit',
                          }}
                        >
                          {item.label}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Collapse>
            )}
          </Box>
        );
      })}
      </Box>
    </Box>
  );
}

export default memo(SubNavigation);
