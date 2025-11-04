# Navigation MUI App

A modern, accessible navigation system built with Next.js 14, Material-UI v5, and lucide-react icons.

## Features

- **Responsive Navigation**: Main icon rail + collapsible sub-navigation panel
- **Customizable**: Drag-and-drop reordering of navigation items
- **Persistent State**: Saves navigation preferences and section states to localStorage
- **Accessible**: Full keyboard navigation with WCAG AA compliance
- **Themeable**: Centralized token system for easy customization

## Quick Start

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Then open [http://localhost:3001](http://localhost:3001) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   ├── members/           # Members section with sub-nav
│   ├── qa-states/         # QA acceptance checklist
│   └── [other routes]/    # Additional pages
├── components/
│   ├── TopBar.tsx         # Top navigation bar
│   ├── MainNavRail.tsx    # Icon-based main navigation
│   ├── SubNavigation.tsx  # Collapsible sub-nav panel
│   ├── CustomizeDialog.tsx # Navigation customization dialog
│   ├── AppLayout.tsx      # Main layout wrapper
│   └── PageContent.tsx    # Page content container
├── config/
│   └── navigation.ts      # Navigation items & icon configuration
├── contexts/
│   └── NavigationContext.tsx # Global navigation state
└── theme/
    └── theme.ts           # MUI theme & design tokens
```

## Customization

### Editing Design Tokens

All colors, spacing, typography, and other design tokens are defined in `src/theme/theme.ts`:

```typescript
export const tokens = {
  colors: {
    primary: '#166CB8',           // Active state color
    primaryActive: 'rgba(22, 108, 184, 0.08)', // Active background
    primaryText: '#263238',       // Main text color
    secondaryText: '#546E7A',     // Secondary text
    border: '#ECEFF1',            // Borders
    topBar: '#FFFFFF',            // Top bar background
    navBackground: '#F9F9F9',     // Navigation backgrounds
  },
  spacing: { xs: 8, sm: 16, md: 24 },
  borderRadius: 4,
  iconSize: 20,
  typography: {
    body1: 16,
    body2: 14,
    headline: 34,
  },
};
```

### Editing Navigation Items

Navigation configuration is in `src/config/navigation.ts`:

```typescript
// Change icons by updating the iconMap
export const iconMap: Record<string, LucideIcon> = {
  home: Icons.LayoutDashboard,
  members: Icons.Users,
  // ... add or change icons here
};

// Add/remove/reorder navigation items
export const mainNavItems: NavItemConfig[] = [
  { 
    id: 'home', 
    label: 'Dashboard', 
    icon: iconMap.home, 
    route: '/', 
    defaultPinned: true 
  },
  // ... add more items here
];
```

### Adding New Pages

1. Create a new page in `src/app/[route]/page.tsx`
2. Add the route to `mainNavItems` in `src/config/navigation.ts`
3. (Optional) Add sub-navigation sections for the page

## How It Works

### Navigation State Management

The app uses React Context (`NavigationContext`) to manage:
- Sub-navigation collapse/expand state
- Pinned vs overflow navigation items
- Item ordering
- Section expand/collapse states

All state is persisted to localStorage for continuity across sessions.

### "More" Popover & Customization

- Items not checked in the customization dialog appear in the "More (•••)" popover
- The "Customize navigation" link opens a dialog with:
  - Drag handles (via @dnd-kit) for reordering
  - Checkboxes to pin/unpin items
  - Save/Cancel actions

### Icon System

All icons come from `lucide-react` at 20px size. The `iconMap` in `navigation.ts` makes it easy to swap icons by updating a single location.

## Accessibility

- All interactive elements are keyboard accessible (Tab, Enter, Space)
- Focus indicators visible on all focusable elements
- ARIA labels and semantic HTML structure
- Color contrast meets WCAG AA standards

## QA Testing

Visit [http://localhost:3001/qa-states](http://localhost:3001/qa-states) for a complete acceptance checklist with testing instructions.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: Material-UI v5
- **Icons**: lucide-react
- **Font**: Inter (Google Fonts)
- **Drag & Drop**: @dnd-kit
- **Language**: TypeScript

## License

MIT

