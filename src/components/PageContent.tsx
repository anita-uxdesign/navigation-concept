'use client';

import React from 'react';
import { Box, Typography, Breadcrumbs, Link } from '@mui/material';
import { ChevronRight } from 'lucide-react';
import { tokens } from '@/theme/theme';

type BreadcrumbItem = {
  label: string;
  href?: string;
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
        <Breadcrumbs
          separator={<ChevronRight size={16} color={tokens.colors.secondaryText} />}
          sx={{ mb: 2 }}
        >
          {breadcrumbs.map((crumb, index) => (
            <Link
              key={index}
              href={crumb.href || '#'}
              sx={{
                fontSize: tokens.typography.body2,
              }}
            >
              {crumb.label}
            </Link>
          ))}
        </Breadcrumbs>
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
