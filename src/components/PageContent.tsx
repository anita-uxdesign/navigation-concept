'use client';

import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { tokens } from '@/theme/theme';

type BreadcrumbItem = {
  label: string;
};

type PageContentProps = {
  breadcrumbs?: BreadcrumbItem[];
  title: string;
  children?: React.ReactNode;
};

export default function PageContent({ breadcrumbs, title, children }: PageContentProps) {
  return (
    <Box sx={{ p: 4 }}>
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <Typography
                component="span"
                sx={{
                  fontSize: tokens.typography.body2,
                  color: index === breadcrumbs.length - 1 
                    ? tokens.colors.primaryText 
                    : tokens.colors.secondaryText,
                  cursor: 'default',
                  userSelect: 'none',
                }}
              >
                {crumb.label}
              </Typography>
              {index < breadcrumbs.length - 1 && (
                <Typography
                  component="span"
                  sx={{
                    fontSize: tokens.typography.body2,
                    color: tokens.colors.secondaryText,
                    cursor: 'default',
                    userSelect: 'none',
                  }}
                >
                  {'>'}
                </Typography>
              )}
            </React.Fragment>
          ))}
        </Box>
      )}

      {/* Page Title */}
      <Typography variant="h1" sx={{ mb: 3 }}>
        {title}
      </Typography>

      {/* Content */}
      {children || (
        <Typography
  sx={{
    fontSize: tokens.typography.body1,
    color: tokens.colors.secondaryText,
    lineHeight: 1.6,
  }}
>
  Hi! This is my navigation proposal. I first sketched it in{' '}
  <Link href="https://www.subframe.com" target="_blank" rel="noopener">Subframe</Link>{' '}
  and then refined the details in{' '}
  <Link href="https://cursor.com" target="_blank" rel="noopener">Cursor</Link>.
  The design uses the{' '}
  <Link href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noopener">Inter</Link>{' '}
  typeface and{' '}
  <Link href="https://lucide.dev/" target="_blank" rel="noopener">Lucide</Link>{' '}
  icons. Both open-source and well-suited for a clean, modern UI.
  <br /><br />
  The goal is to validate the information architecture quickly, then iterate.
</Typography>
      )}
    </Box>
  );
}
