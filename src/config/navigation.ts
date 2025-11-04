import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

export type NavItemConfig = {
  id: string;
  label: string;
  icon: LucideIcon;
  route: string;
  defaultPinned: boolean;
};

export type SubNavSection = {
  id: string;
  label: string;
  items: SubNavItem[];
};

export type SubNavItem = {
  id: string;
  label: string;
  route: string;
};

// Icon mapping - easy to swap icons later
export const iconMap: Record<string, LucideIcon> = {
  home: Icons.LayoutDashboard,
  members: Icons.Users,
  finance: Icons.Building2,
  appointments: Icons.Calendar,
  classes: Icons.Dumbbell,
  communication: Icons.MessageSquare,
  analytics: Icons.BarChart3,
  sales: Icons.ShoppingCart,
  tasks: Icons.FileText,
  resources: Icons.Folder,
  sports: Icons.Globe,
  training: Icons.GraduationCap,
  settings: Icons.Settings,
  help: Icons.HelpCircle,
  shop: Icons.ShoppingBag,
  marketplace: Icons.Store,
};

// Main navigation items configuration
export const mainNavItems: NavItemConfig[] = [
  { id: 'home', label: 'Dashboard', icon: iconMap.home, route: '/', defaultPinned: true },
  { id: 'members', label: 'Members', icon: iconMap.members, route: '/members', defaultPinned: true },
  { id: 'finance', label: 'Finance', icon: iconMap.finance, route: '/finance', defaultPinned: true },
  { id: 'appointments', label: 'Appointments', icon: iconMap.appointments, route: '/appointments', defaultPinned: true },
  { id: 'classes', label: 'Classes', icon: iconMap.classes, route: '/classes', defaultPinned: true },
  { id: 'communication', label: 'Communication', icon: iconMap.communication, route: '/communication', defaultPinned: true },
  { id: 'analytics', label: 'Analytics', icon: iconMap.analytics, route: '/analytics', defaultPinned: true },
  { id: 'sales', label: 'Sales', icon: iconMap.sales, route: '/sales', defaultPinned: true },
  { id: 'tasks', label: 'Tasks', icon: iconMap.tasks, route: '/tasks', defaultPinned: false },
  { id: 'resources', label: 'Resources', icon: iconMap.resources, route: '/resources', defaultPinned: false },
  { id: 'sports', label: 'Sports', icon: iconMap.sports, route: '/sports', defaultPinned: false },
  { id: 'training', label: 'Training World', icon: iconMap.training, route: '/training', defaultPinned: false },
  { id: 'settings', label: 'Settings', icon: iconMap.settings, route: '/settings', defaultPinned: false },
  { id: 'help', label: 'Help & Support', icon: iconMap.help, route: '/help', defaultPinned: false },
  { id: 'shop', label: 'Shop', icon: iconMap.shop, route: '/shop', defaultPinned: false },
  { id: 'marketplace', label: 'Marketplace', icon: iconMap.marketplace, route: '/marketplace', defaultPinned: false },
];

// Sub-navigation configurations for all pages
export const membersSubNav: SubNavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [],
  },
  {
    id: 'section1',
    label: 'Member',
    items: [
      { id: 'item1', label: 'Profile', route: '/members/item1' },
      { id: 'item2', label: 'Membership', route: '/members/item2' },
      { id: 'item3', label: 'History', route: '/members/item3' },
    ],
  },
  {
    id: 'section2',
    label: 'Groups',
    items: [
      { id: 'item4', label: 'All Groups', route: '/members/item4' },
      { id: 'item5', label: 'Group Types', route: '/members/item5' },
      { id: 'item6', label: 'Settings', route: '/members/item6' },
    ],
  },
  {
    id: 'section3',
    label: 'Reports',
    items: [
      { id: 'item7', label: 'Activity', route: '/members/item7' },
      { id: 'item8', label: 'Analytics', route: '/members/item8' },
      { id: 'item9', label: 'Export', route: '/members/item9' },
    ],
  },
];

export const financeSubNav: SubNavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [],
  },
  {
    id: 'section1',
    label: 'Transactions',
    items: [
      { id: 'item1', label: 'Payments', route: '/finance/item1' },
      { id: 'item2', label: 'Invoices', route: '/finance/item2' },
      { id: 'item3', label: 'Receipts', route: '/finance/item3' },
    ],
  },
  {
    id: 'section2',
    label: 'Accounts',
    items: [
      { id: 'item4', label: 'Bank Accounts', route: '/finance/item4' },
      { id: 'item5', label: 'Credit Cards', route: '/finance/item5' },
      { id: 'item6', label: 'Reconciliation', route: '/finance/item6' },
    ],
  },
  {
    id: 'section3',
    label: 'Reports',
    items: [
      { id: 'item7', label: 'Balance Sheet', route: '/finance/item7' },
      { id: 'item8', label: 'Profit & Loss', route: '/finance/item8' },
      { id: 'item9', label: 'Tax Reports', route: '/finance/item9' },
    ],
  },
];

export const appointmentsSubNav: SubNavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [],
  },
  {
    id: 'section1',
    label: 'Schedule',
    items: [
      { id: 'item1', label: 'Calendar', route: '/appointments/item1' },
      { id: 'item2', label: 'Availability', route: '/appointments/item2' },
      { id: 'item3', label: 'Time Slots', route: '/appointments/item3' },
    ],
  },
  {
    id: 'section2',
    label: 'Booking',
    items: [
      { id: 'item4', label: 'New Booking', route: '/appointments/item4' },
      { id: 'item5', label: 'Pending', route: '/appointments/item5' },
      { id: 'item6', label: 'Confirmed', route: '/appointments/item6' },
    ],
  },
  {
    id: 'section3',
    label: 'Settings',
    items: [
      { id: 'item7', label: 'Services', route: '/appointments/item7' },
      { id: 'item8', label: 'Resources', route: '/appointments/item8' },
      { id: 'item9', label: 'Notifications', route: '/appointments/item9' },
    ],
  },
];

export const classesSubNav: SubNavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [],
  },
  {
    id: 'section1',
    label: 'Classes',
    items: [
      { id: 'item1', label: 'All Classes', route: '/classes/item1' },
      { id: 'item2', label: 'Schedule', route: '/classes/item2' },
      { id: 'item3', label: 'Attendance', route: '/classes/item3' },
    ],
  },
  {
    id: 'section2',
    label: 'Instructors',
    items: [
      { id: 'item4', label: 'All Instructors', route: '/classes/item4' },
      { id: 'item5', label: 'Assignments', route: '/classes/item5' },
      { id: 'item6', label: 'Performance', route: '/classes/item6' },
    ],
  },
  {
    id: 'section3',
    label: 'Management',
    items: [
      { id: 'item7', label: 'Class Types', route: '/classes/item7' },
      { id: 'item8', label: 'Capacity', route: '/classes/item8' },
      { id: 'item9', label: 'Settings', route: '/classes/item9' },
    ],
  },
];

export const communicationSubNav: SubNavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [],
  },
  {
    id: 'section1',
    label: 'Messages',
    items: [
      { id: 'item1', label: 'Inbox', route: '/communication/item1' },
      { id: 'item2', label: 'Sent', route: '/communication/item2' },
      { id: 'item3', label: 'Drafts', route: '/communication/item3' },
    ],
  },
  {
    id: 'section2',
    label: 'Campaigns',
    items: [
      { id: 'item4', label: 'Email Campaigns', route: '/communication/item4' },
      { id: 'item5', label: 'SMS Campaigns', route: '/communication/item5' },
      { id: 'item6', label: 'Templates', route: '/communication/item6' },
    ],
  },
  {
    id: 'section3',
    label: 'Settings',
    items: [
      { id: 'item7', label: 'Preferences', route: '/communication/item7' },
      { id: 'item8', label: 'Signatures', route: '/communication/item8' },
      { id: 'item9', label: 'Automation', route: '/communication/item9' },
    ],
  },
];

export const analyticsSubNav: SubNavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [],
  },
  {
    id: 'section1',
    label: 'Reports',
    items: [
      { id: 'item1', label: 'Dashboard', route: '/analytics/item1' },
      { id: 'item2', label: 'Custom Reports', route: '/analytics/item2' },
      { id: 'item3', label: 'Saved Reports', route: '/analytics/item3' },
    ],
  },
  {
    id: 'section2',
    label: 'Metrics',
    items: [
      { id: 'item4', label: 'Performance', route: '/analytics/item4' },
      { id: 'item5', label: 'Trends', route: '/analytics/item5' },
      { id: 'item6', label: 'Comparisons', route: '/analytics/item6' },
    ],
  },
  {
    id: 'section3',
    label: 'Export',
    items: [
      { id: 'item7', label: 'Data Export', route: '/analytics/item7' },
      { id: 'item8', label: 'Scheduled Exports', route: '/analytics/item8' },
      { id: 'item9', label: 'API Access', route: '/analytics/item9' },
    ],
  },
];

export const salesSubNav: SubNavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [],
  },
  {
    id: 'section1',
    label: 'Orders',
    items: [
      { id: 'item1', label: 'All Orders', route: '/sales/item1' },
      { id: 'item2', label: 'Pending', route: '/sales/item2' },
      { id: 'item3', label: 'Completed', route: '/sales/item3' },
    ],
  },
  {
    id: 'section2',
    label: 'Products',
    items: [
      { id: 'item4', label: 'All Products', route: '/sales/item4' },
      { id: 'item5', label: 'Categories', route: '/sales/item5' },
      { id: 'item6', label: 'Inventory', route: '/sales/item6' },
    ],
  },
  {
    id: 'section3',
    label: 'Reports',
    items: [
      { id: 'item7', label: 'Sales Report', route: '/sales/item7' },
      { id: 'item8', label: 'Best Sellers', route: '/sales/item8' },
      { id: 'item9', label: 'Revenue', route: '/sales/item9' },
    ],
  },
];

export const tasksSubNav: SubNavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [],
  },
  {
    id: 'section1',
    label: 'Tasks',
    items: [
      { id: 'item1', label: 'My Tasks', route: '/tasks/item1' },
      { id: 'item2', label: 'Team Tasks', route: '/tasks/item2' },
      { id: 'item3', label: 'Completed', route: '/tasks/item3' },
    ],
  },
  {
    id: 'section2',
    label: 'Projects',
    items: [
      { id: 'item4', label: 'All Projects', route: '/tasks/item4' },
      { id: 'item5', label: 'Active', route: '/tasks/item5' },
      { id: 'item6', label: 'Archived', route: '/tasks/item6' },
    ],
  },
  {
    id: 'section3',
    label: 'Management',
    items: [
      { id: 'item7', label: 'Templates', route: '/tasks/item7' },
      { id: 'item8', label: 'Categories', route: '/tasks/item8' },
      { id: 'item9', label: 'Settings', route: '/tasks/item9' },
    ],
  },
];

export const resourcesSubNav: SubNavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [],
  },
  {
    id: 'section1',
    label: 'Documents',
    items: [
      { id: 'item1', label: 'All Documents', route: '/resources/item1' },
      { id: 'item2', label: 'Templates', route: '/resources/item2' },
      { id: 'item3', label: 'Shared', route: '/resources/item3' },
    ],
  },
  {
    id: 'section2',
    label: 'Media',
    items: [
      { id: 'item4', label: 'Images', route: '/resources/item4' },
      { id: 'item5', label: 'Videos', route: '/resources/item5' },
      { id: 'item6', label: 'Audio', route: '/resources/item6' },
    ],
  },
  {
    id: 'section3',
    label: 'Management',
    items: [
      { id: 'item7', label: 'Storage', route: '/resources/item7' },
      { id: 'item8', label: 'Permissions', route: '/resources/item8' },
      { id: 'item9', label: 'Settings', route: '/resources/item9' },
    ],
  },
];

export const sportsSubNav: SubNavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [],
  },
  {
    id: 'section1',
    label: 'Teams',
    items: [
      { id: 'item1', label: 'All Teams', route: '/sports/item1' },
      { id: 'item2', label: 'Schedule', route: '/sports/item2' },
      { id: 'item3', label: 'Roster', route: '/sports/item3' },
    ],
  },
  {
    id: 'section2',
    label: 'Events',
    items: [
      { id: 'item4', label: 'Matches', route: '/sports/item4' },
      { id: 'item5', label: 'Tournaments', route: '/sports/item5' },
      { id: 'item6', label: 'Results', route: '/sports/item6' },
    ],
  },
  {
    id: 'section3',
    label: 'Management',
    items: [
      { id: 'item7', label: 'Facilities', route: '/sports/item7' },
      { id: 'item8', label: 'Equipment', route: '/sports/item8' },
      { id: 'item9', label: 'Settings', route: '/sports/item9' },
    ],
  },
];

export const trainingSubNav: SubNavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [],
  },
  {
    id: 'section1',
    label: 'Courses',
    items: [
      { id: 'item1', label: 'All Courses', route: '/training/item1' },
      { id: 'item2', label: 'My Courses', route: '/training/item2' },
      { id: 'item3', label: 'Completed', route: '/training/item3' },
    ],
  },
  {
    id: 'section2',
    label: 'Content',
    items: [
      { id: 'item4', label: 'Lessons', route: '/training/item4' },
      { id: 'item5', label: 'Quizzes', route: '/training/item5' },
      { id: 'item6', label: 'Materials', route: '/training/item6' },
    ],
  },
  {
    id: 'section3',
    label: 'Management',
    items: [
      { id: 'item7', label: 'Instructors', route: '/training/item7' },
      { id: 'item8', label: 'Certifications', route: '/training/item8' },
      { id: 'item9', label: 'Settings', route: '/training/item9' },
    ],
  },
];

export const settingsSubNav: SubNavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [],
  },
  {
    id: 'section1',
    label: 'General',
    items: [
      { id: 'item1', label: 'Organization', route: '/settings/item1' },
      { id: 'item2', label: 'Preferences', route: '/settings/item2' },
      { id: 'item3', label: 'Branding', route: '/settings/item3' },
    ],
  },
  {
    id: 'section2',
    label: 'Security',
    items: [
      { id: 'item4', label: 'Users', route: '/settings/item4' },
      { id: 'item5', label: 'Roles', route: '/settings/item5' },
      { id: 'item6', label: 'Permissions', route: '/settings/item6' },
    ],
  },
  {
    id: 'section3',
    label: 'Integration',
    items: [
      { id: 'item7', label: 'APIs', route: '/settings/item7' },
      { id: 'item8', label: 'Webhooks', route: '/settings/item8' },
      { id: 'item9', label: 'Plugins', route: '/settings/item9' },
    ],
  },
];

export const helpSubNav: SubNavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [],
  },
  {
    id: 'section1',
    label: 'Support',
    items: [
      { id: 'item1', label: 'Getting Started', route: '/help/item1' },
      { id: 'item2', label: 'Tutorials', route: '/help/item2' },
      { id: 'item3', label: 'FAQs', route: '/help/item3' },
    ],
  },
  {
    id: 'section2',
    label: 'Contact',
    items: [
      { id: 'item4', label: 'Submit Ticket', route: '/help/item4' },
      { id: 'item5', label: 'Live Chat', route: '/help/item5' },
      { id: 'item6', label: 'Phone Support', route: '/help/item6' },
    ],
  },
  {
    id: 'section3',
    label: 'Resources',
    items: [
      { id: 'item7', label: 'Documentation', route: '/help/item7' },
      { id: 'item8', label: 'Community', route: '/help/item8' },
      { id: 'item9', label: 'Updates', route: '/help/item9' },
    ],
  },
];

export const shopSubNav: SubNavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [],
  },
  {
    id: 'section1',
    label: 'Products',
    items: [
      { id: 'item1', label: 'All Products', route: '/shop/item1' },
      { id: 'item2', label: 'Categories', route: '/shop/item2' },
      { id: 'item3', label: 'Featured', route: '/shop/item3' },
    ],
  },
  {
    id: 'section2',
    label: 'Orders',
    items: [
      { id: 'item4', label: 'All Orders', route: '/shop/item4' },
      { id: 'item5', label: 'Pending', route: '/shop/item5' },
      { id: 'item6', label: 'Shipped', route: '/shop/item6' },
    ],
  },
  {
    id: 'section3',
    label: 'Management',
    items: [
      { id: 'item7', label: 'Inventory', route: '/shop/item7' },
      { id: 'item8', label: 'Promotions', route: '/shop/item8' },
      { id: 'item9', label: 'Settings', route: '/shop/item9' },
    ],
  },
];

export const marketplaceSubNav: SubNavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [],
  },
  {
    id: 'section1',
    label: 'Listings',
    items: [
      { id: 'item1', label: 'All Listings', route: '/marketplace/item1' },
      { id: 'item2', label: 'My Listings', route: '/marketplace/item2' },
      { id: 'item3', label: 'Featured', route: '/marketplace/item3' },
    ],
  },
  {
    id: 'section2',
    label: 'Transactions',
    items: [
      { id: 'item4', label: 'Purchases', route: '/marketplace/item4' },
      { id: 'item5', label: 'Sales', route: '/marketplace/item5' },
      { id: 'item6', label: 'History', route: '/marketplace/item6' },
    ],
  },
  {
    id: 'section3',
    label: 'Management',
    items: [
      { id: 'item7', label: 'Sellers', route: '/marketplace/item7' },
      { id: 'item8', label: 'Reviews', route: '/marketplace/item8' },
      { id: 'item9', label: 'Settings', route: '/marketplace/item9' },
    ],
  },
];
