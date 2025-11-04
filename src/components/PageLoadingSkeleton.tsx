'use client';

import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { tokens } from '@/theme/theme';

export default function PageLoadingSkeleton() {
  return (
    <Box
      sx={{
        p: 4,
        height: '100%',
        backgroundColor: tokens.colors.topBar,
      }}
    >
      {/* Page title skeleton */}
      <Skeleton 
        variant="text" 
        width="30%" 
        height={40}
        sx={{ mb: 3 }}
      />
      
      {/* Content blocks */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* First content block */}
        <Box>
          <Skeleton variant="text" width="20%" height={32} sx={{ mb: 2 }} />
          <Skeleton variant="rectangular" width="100%" height={120} sx={{ borderRadius: `${tokens.borderRadius}px` }} />
        </Box>
        
        {/* Second content block */}
        <Box>
          <Skeleton variant="text" width="25%" height={32} sx={{ mb: 2 }} />
          <Skeleton variant="rectangular" width="100%" height={160} sx={{ borderRadius: `${tokens.borderRadius}px` }} />
        </Box>
        
        {/* Third content block */}
        <Box>
          <Skeleton variant="text" width="18%" height={32} sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Skeleton variant="rectangular" width="48%" height={100} sx={{ borderRadius: `${tokens.borderRadius}px` }} />
            <Skeleton variant="rectangular" width="48%" height={100} sx={{ borderRadius: `${tokens.borderRadius}px` }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
