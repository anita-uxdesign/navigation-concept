'use client';

import React, { useState } from 'react';
import { Box, IconButton, TextField, InputAdornment, Tooltip, Avatar, Menu, MenuItem } from '@mui/material';
import { PanelLeftClose, PanelLeftOpen, MapPin, Search, Bell, HelpCircle, ChevronDown } from 'lucide-react';
import { tokens } from '@/theme/theme';
import { useNavigation } from '@/contexts/NavigationContext';

export default function TopBar() {
  const { subNavOpen, toggleSubNav } = useNavigation();
  const [locationAnchor, setLocationAnchor] = useState<null | HTMLElement>(null);
  const [selectedLocation, setSelectedLocation] = useState('Hamburg');

  const handleLocationClick = (event: React.MouseEvent<HTMLElement>) => {
    setLocationAnchor(event.currentTarget);
  };

  const handleLocationClose = (location?: string) => {
    if (location) setSelectedLocation(location);
    setLocationAnchor(null);
  };

  return (
    <Box
      sx={{
        height: 64,
        width: '100%',
        backgroundColor: tokens.colors.topBar,
        borderBottom: `1px solid ${tokens.colors.border}`,
        display: 'flex',
        alignItems: 'center',
        px: `${tokens.gutterX}px`,
        gap: 2,
        flexShrink: 0,
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Left Group - Fixed width */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
        {/* Collapse/Expand button */}
        <Tooltip title={subNavOpen ? 'Collapse navigation' : 'Expand navigation'}>
          <IconButton
            onClick={toggleSubNav}
            sx={{
              color: tokens.colors.secondaryText,
              '&:hover': { backgroundColor: tokens.colors.primaryActive },
              '&:focus-visible': {
                outline: `2px solid ${tokens.colors.primary}`,
                outlineOffset: 2,
              },
            }}
          >
            {subNavOpen ? <PanelLeftClose size={tokens.iconSize} /> : <PanelLeftOpen size={tokens.iconSize} />}
          </IconButton>
        </Tooltip>

        {/* Location Picker - Fixed width with ellipsis */}
        <Tooltip title={selectedLocation}>
          <Box
            onClick={handleLocationClick}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              px: 1,
              py: 0.5,
              maxWidth: 150,
              minWidth: 100,
              borderRadius: `${tokens.borderRadius}px`,
              '&:hover': { backgroundColor: tokens.colors.navBackground },
            }}
          >
            <MapPin size={tokens.iconSize} color={tokens.colors.secondaryText} />
            <Box 
              sx={{ 
                fontSize: tokens.typography.body2, 
                color: tokens.colors.primaryText, 
                fontWeight: 500,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                flex: 1,
              }}
            >
              {selectedLocation}
            </Box>
            <ChevronDown size={16} color={tokens.colors.secondaryText} />
          </Box>
        </Tooltip>
        <Menu
          anchorEl={locationAnchor}
          open={Boolean(locationAnchor)}
          onClose={() => handleLocationClose()}
        >
          <MenuItem onClick={() => handleLocationClose('Hamburg')}>Hamburg</MenuItem>
          <MenuItem onClick={() => handleLocationClose('Berlin')}>Berlin</MenuItem>
          <MenuItem onClick={() => handleLocationClose('Munich')}>Munich</MenuItem>
          <MenuItem onClick={() => handleLocationClose('Very Long Location Name')}>Very Long Location Name</MenuItem>
        </Menu>
      </Box>

      {/* Center - Search field (flex-grow) */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: 0 }}>
        <TextField
          placeholder="Search"
          size="small"
          fullWidth
          sx={{ maxWidth: 600 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={tokens.iconSize} color={tokens.colors.secondaryText} />
              </InputAdornment>
            ),
            sx: {
              backgroundColor: tokens.colors.navBackground,
              '& fieldset': { border: 'none' },
            },
          }}
        />
      </Box>

      {/* Right Group - Fixed width */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
        <Tooltip title="Notifications">
          <IconButton 
            sx={{ 
              color: tokens.colors.secondaryText,
              '&:focus-visible': {
                outline: `2px solid ${tokens.colors.primary}`,
                outlineOffset: 2,
              },
            }}
          >
            <Bell size={tokens.iconSize} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Help">
          <IconButton 
            sx={{ 
              color: tokens.colors.secondaryText,
              '&:focus-visible': {
                outline: `2px solid ${tokens.colors.primary}`,
                outlineOffset: 2,
              },
            }}
          >
            <HelpCircle size={tokens.iconSize} />
          </IconButton>
        </Tooltip>
        <Avatar sx={{ width: 32, height: 32, cursor: 'pointer' }}>A</Avatar>
      </Box>
    </Box>
  );
}

