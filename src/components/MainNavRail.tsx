'use client';

import React, { useState, useMemo, useCallback, memo, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Box, IconButton, Tooltip, Popover, List, ListItem, ListItemIcon, ListItemText, Divider, Button } from '@mui/material';
import { MoreHorizontal } from 'lucide-react';
import { tokens } from '@/theme/theme';
import { mainNavItems } from '@/config/navigation';
import { useNavigation } from '@/contexts/NavigationContext';
import CustomizeDialog from './CustomizeDialog';
import Image from 'next/image';
import logoImage from '@/logo.jpg';
import Link from 'next/link';

function MainNavRail() {
  const pathname = usePathname();
  const router = useRouter();
  const { pinnedItems, itemOrder } = useNavigation();
  const [moreAnchor, setMoreAnchor] = useState<null | HTMLElement>(null);
  const [customizeOpen, setCustomizeOpen] = useState(false);

  // Memoize ordered items to avoid recalculation
  const orderedItems = useMemo(
    () => itemOrder
      .map(id => mainNavItems.find(item => item.id === id))
      .filter(Boolean) as typeof mainNavItems,
    [itemOrder]
  );

  // Memoize pinned and overflow items
  const pinnedNavItems = useMemo(
    () => orderedItems.filter(item => pinnedItems.includes(item.id)),
    [orderedItems, pinnedItems]
  );

  const overflowItems = useMemo(
    () => orderedItems.filter(item => !pinnedItems.includes(item.id)),
    [orderedItems, pinnedItems]
  );

  // Prefetch routes on mount for instant navigation
  useEffect(() => {
    // Prefetch all pinned navigation routes
    pinnedNavItems.forEach(item => {
      router.prefetch(item.route);
    });
  }, [pinnedNavItems, router]);

  const handleMoreClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setMoreAnchor(event.currentTarget);
    // Prefetch overflow items when menu opens
    overflowItems.forEach(item => {
      router.prefetch(item.route);
    });
  }, [overflowItems, router]);

  const handleMoreClose = useCallback(() => {
    setMoreAnchor(null);
  }, []);

  const handleNavClick = useCallback((route: string) => {
    router.push(route);
    setMoreAnchor(null);
  }, [router]);

  const isActive = useCallback((route: string) => {
    if (route === '/') return pathname === '/';
    return pathname.startsWith(route);
  }, [pathname]);

  return (
    <>
      <Box
        sx={{
          width: 56,
          height: '100vh',
          backgroundColor: tokens.colors.navBackground,
          borderRight: `1px solid ${tokens.colors.border}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          position: 'relative',
          zIndex: 1,
          flexShrink: 0,
        }}
      >
        {/* Logo */}
        <Box
          onClick={() => handleNavClick('/')}
          sx={{
            width: '100%',
            height: 64,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '4px', 
            overflow: 'hidden', 
            '&:hover': { opacity: 0.8 },
          }}
        >
          <Box sx={{ p: '4px' }}>
            <Image
              src={logoImage}
              alt="App logo"
              width={40}
              height={40}
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: 40,
                objectFit: 'contain',
                borderRadius: '4px', 
              }}
            />
          </Box>
        </Box>

        {/* Pinned Items */}
        {pinnedNavItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.route);
          return (
            <Tooltip key={item.id} title={item.label} placement="right">
              <IconButton
                onClick={() => handleNavClick(item.route)}
                sx={{
                  color: active ? tokens.colors.primary : tokens.colors.secondaryText,
                  backgroundColor: active ? tokens.colors.primaryActive : 'transparent',
                  '&:hover': { backgroundColor: tokens.colors.primaryActive },
                  '&:focus-visible': {
                    outline: `2px solid ${tokens.colors.primary}`,
                    outlineOffset: 2,
                  },
                }}
              >
                <Icon size={tokens.iconSize} />
              </IconButton>
            </Tooltip>
          );
        })}

        {/* More button - always visible */}
        <Tooltip title="More" placement="right">
          <IconButton
            onClick={(e) => {
              if (overflowItems.length > 0) {
                handleMoreClick(e);
              } else {
                setCustomizeOpen(true);
              }
            }}
            sx={{
              color: tokens.colors.secondaryText,
              '&:hover': { backgroundColor: tokens.colors.primaryActive },
              '&:focus-visible': {
                outline: `2px solid ${tokens.colors.primary}`,
                outlineOffset: 2,
              },
            }}
          >
            <MoreHorizontal size={tokens.iconSize} />
          </IconButton>
        </Tooltip>
      </Box>

      {/* More Popover */}
      <Popover
        open={Boolean(moreAnchor)}
        anchorEl={moreAnchor}
        onClose={handleMoreClose}
        anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
        transformOrigin={{ vertical: 'center', horizontal: 'left' }}
        sx={{ ml: 1 }}
      >
        <List sx={{ minWidth: 240, py: 1 }}>
          {overflowItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.route);
            return (
              <ListItem
                key={item.id}
                button
                onClick={() => handleNavClick(item.route)}
                sx={{
                  color: active ? tokens.colors.primary : tokens.colors.primaryText,
                  backgroundColor: active ? tokens.colors.primaryActive : 'transparent',
                  '&:hover': { backgroundColor: tokens.colors.primaryActive },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                  <Icon size={tokens.iconSize} />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: tokens.typography.body2 }}
                />
              </ListItem>
            );
          })}
          <Divider sx={{ borderColor: tokens.colors.border }} />
          <Box sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
            <Button
              onClick={() => {
                setCustomizeOpen(true);
                handleMoreClose();
              }}
              sx={{
                color: tokens.colors.primary,
                fontSize: tokens.typography.body1,
                fontWeight: 600,
                textTransform: 'none',
                px: 2,
                py: 1,
                borderRadius: `${tokens.borderRadius}px`,
                '&:hover': {
                  backgroundColor: tokens.colors.primaryActive,
                  textDecoration: 'none',
                },
                '&:active': {
                  backgroundColor: 'rgba(22, 108, 184, 0.12)',
                },
                '&:focus-visible': {
                  outline: `2px solid ${tokens.colors.primary}`,
                  outlineOffset: 2,
                },
              }}
            >
              Customize navigation
            </Button>
          </Box>
        </List>
      </Popover>

      {/* Customize Dialog */}
      <CustomizeDialog open={customizeOpen} onClose={() => setCustomizeOpen(false)} />
    </>
  );
}

export default memo(MainNavRail);
