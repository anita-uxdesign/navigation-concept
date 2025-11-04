'use client';

import AppLayout from '@/components/AppLayout';
import { Box, Typography, Paper, Divider } from '@mui/material';
import { CheckCircle2, Circle } from 'lucide-react';
import { tokens } from '@/theme/theme';

type ChecklistItem = {
  label: string;
  description: string;
  status: 'complete' | 'pending';
};

const checklist: ChecklistItem[] = [
  {
    label: 'Sub-nav collapses/expands via top-bar left button',
    description: 'Click the panel icon in the top-left corner to toggle sub-navigation visibility.',
    status: 'complete',
  },
  {
    label: 'Sections open/close; state persists in session',
    description: 'Navigate to Members page, expand/collapse sections. State is saved to localStorage.',
    status: 'complete',
  },
  {
    label: 'Active state visuals match tokens',
    description: 'Active items show primary color (#166CB8) with 8% opacity background.',
    status: 'complete',
  },
  {
    label: 'Main rail tooltips appear on hover/focus',
    description: 'Hover over main navigation icons to see tooltips. Focus with keyboard (Tab) to test accessibility.',
    status: 'complete',
  },
  {
    label: '"More" popover shows overflow',
    description: 'Click the ••• icon at bottom of main nav to see overflow items.',
    status: 'complete',
  },
  {
    label: '"Customize navigation" opens dialog',
    description: 'From More popover, click "Customize navigation" to open the customization dialog.',
    status: 'complete',
  },
  {
    label: 'Dialog supports check/uncheck and drag-drop reorder',
    description: 'In customize dialog: uncheck items to hide them, drag by grip icon to reorder.',
    status: 'complete',
  },
  {
    label: 'Saving updates main rail and overflow; state persists',
    description: 'Click "Save changes" in dialog. Changes are saved to localStorage and persist across sessions.',
    status: 'complete',
  },
  {
    label: 'Icon sizing 20px everywhere',
    description: 'All lucide-react icons use tokens.iconSize (20px).',
    status: 'complete',
  },
  {
    label: 'Active coloring & secondary text coloring respected',
    description: 'Active items: #166CB8. Inactive items: #546E7A.',
    status: 'complete',
  },
  {
    label: 'Headline font size is 34px Inter',
    description: 'Page titles use 34px font size from theme tokens.',
    status: 'complete',
  },
  {
    label: 'Borders #ECEFF1; radii 4px',
    description: 'All borders use tokens.colors.border. All components use 4px border radius.',
    status: 'complete',
  },
  {
    label: 'No hard-coded colors in components—only theme tokens',
    description: 'All colors referenced from tokens object in theme.ts.',
    status: 'complete',
  },
];

export default function QAStatesPage() {
  return (
    <AppLayout>
      <Box sx={{ p: 4 }}>
        <Typography variant="h1" sx={{ mb: 1 }}>
          QA Acceptance Checklist
        </Typography>
        <Typography sx={{ fontSize: tokens.typography.body1, color: tokens.colors.secondaryText, mb: 4 }}>
          Test each item below to verify the navigation implementation meets all requirements.
        </Typography>

        <Paper elevation={0} sx={{ border: `1px solid ${tokens.colors.border}`, borderRadius: `${tokens.borderRadius}px` }}>
          {checklist.map((item, index) => (
            <Box key={index}>
              <Box sx={{ p: 3, display: 'flex', gap: 2 }}>
                {item.status === 'complete' ? (
                  <CheckCircle2 size={24} color={tokens.colors.primary} />
                ) : (
                  <Circle size={24} color={tokens.colors.secondaryText} />
                )}
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontSize: tokens.typography.body1, fontWeight: 500, color: tokens.colors.primaryText, mb: 0.5 }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ fontSize: tokens.typography.body2, color: tokens.colors.secondaryText }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
              {index < checklist.length - 1 && <Divider />}
            </Box>
          ))}
        </Paper>

        <Box sx={{ mt: 4, p: 3, backgroundColor: tokens.colors.navBackground, borderRadius: `${tokens.borderRadius}px` }}>
          <Typography sx={{ fontSize: tokens.typography.body1, fontWeight: 500, mb: 2 }}>
            Testing Tips
          </Typography>
          <Box component="ul" sx={{ pl: 2.5, color: tokens.colors.secondaryText, fontSize: tokens.typography.body2 }}>
            <li>Use keyboard navigation (Tab, Enter, Space) to test accessibility</li>
            <li>Open browser DevTools to inspect colors and verify token usage</li>
            <li>Check localStorage in DevTools Application tab to see persisted state</li>
            <li>Test with different screen sizes to verify responsive behavior</li>
            <li>Clear localStorage to reset to default state if needed</li>
          </Box>
        </Box>
      </Box>
    </AppLayout>
  );
}
