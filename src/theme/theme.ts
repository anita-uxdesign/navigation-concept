'use client';

import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Theme tokens - all colors defined here for easy maintenance
export const tokens = {
  colors: {
    primary: '#166CB8',
    primaryHover: 'rgba(22, 108, 184, 0.04)', // 4% opacity for hover
    primaryActive: 'rgba(22, 108, 184, 0.08)', // 8% opacity for selected
    primaryText: '#263238',
    secondaryText: '#546E7A',
    border: '#ECEFF1',
    topBar: '#FFFFFF',
    navBackground: '#F9F9F9',
  },
  spacing: {
    xs: 8,
    sm: 16,
    md: 24,
  },
  gutterX: 24, // Consistent horizontal gutter for alignment
  borderRadius: 4,
  iconSize: 20,
  typography: {
    body1: 16,
    body2: 14,
    headline: 34,
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: tokens.colors.primary,
    },
    text: {
      primary: tokens.colors.primaryText,
      secondary: tokens.colors.secondaryText,
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    body1: {
      fontSize: tokens.typography.body1,
      color: tokens.colors.primaryText,
    },
    body2: {
      fontSize: tokens.typography.body2,
      color: tokens.colors.secondaryText,
    },
    h1: {
      fontSize: tokens.typography.headline,
      fontWeight: 500,
      color: tokens.colors.primaryText,
    },
  },
  shape: {
    borderRadius: tokens.borderRadius,
  },
  spacing: tokens.spacing.xs,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: tokens.borderRadius,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:focus-visible': {
            outline: `2px solid ${tokens.colors.primary}`,
            outlineOffset: 2,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&:focus-visible': {
            outline: `2px solid ${tokens.colors.primary}`,
            outlineOffset: 2,
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'always',
      },
    },
  },
});

export default theme;
