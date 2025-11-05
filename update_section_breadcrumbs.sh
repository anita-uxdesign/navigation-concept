#!/bin/bash

# Members section pages
sed -i '' "s/breadcrumbs={\[{ label: 'Members' }, { label: 'Profile' }\]}/breadcrumbs={[{ label: 'Members' }, { label: 'Member' }, { label: 'Profile' }]}/g" src/app/members/item1/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Members' }, { label: 'Membership' }\]}/breadcrumbs={[{ label: 'Members' }, { label: 'Member' }, { label: 'Membership' }]}/g" src/app/members/item2/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Members' }, { label: 'History' }\]}/breadcrumbs={[{ label: 'Members' }, { label: 'Member' }, { label: 'History' }]}/g" src/app/members/item3/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Members' }, { label: 'All Groups' }\]}/breadcrumbs={[{ label: 'Members' }, { label: 'Groups' }, { label: 'All Groups' }]}/g" src/app/members/item4/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Members' }, { label: 'Group Types' }\]}/breadcrumbs={[{ label: 'Members' }, { label: 'Groups' }, { label: 'Group Types' }]}/g" src/app/members/item5/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Members' }, { label: 'Settings' }\]}/breadcrumbs={[{ label: 'Members' }, { label: 'Groups' }, { label: 'Settings' }]}/g" src/app/members/item6/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Members' }, { label: 'Activity' }\]}/breadcrumbs={[{ label: 'Members' }, { label: 'Reports' }, { label: 'Activity' }]}/g" src/app/members/item7/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Members' }, { label: 'Analytics' }\]}/breadcrumbs={[{ label: 'Members' }, { label: 'Reports' }, { label: 'Analytics' }]}/g" src/app/members/item8/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Members' }, { label: 'Export' }\]}/breadcrumbs={[{ label: 'Members' }, { label: 'Reports' }, { label: 'Export' }]}/g" src/app/members/item9/page.tsx

# Finance section pages
sed -i '' "s/breadcrumbs={\[{ label: 'Finance' }, { label: 'Payments' }\]}/breadcrumbs={[{ label: 'Finance' }, { label: 'Transactions' }, { label: 'Payments' }]}/g" src/app/finance/item1/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Finance' }, { label: 'Invoices' }\]}/breadcrumbs={[{ label: 'Finance' }, { label: 'Transactions' }, { label: 'Invoices' }]}/g" src/app/finance/item2/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Finance' }, { label: 'Receipts' }\]}/breadcrumbs={[{ label: 'Finance' }, { label: 'Transactions' }, { label: 'Receipts' }]}/g" src/app/finance/item3/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Finance' }, { label: 'Bank Accounts' }\]}/breadcrumbs={[{ label: 'Finance' }, { label: 'Accounts' }, { label: 'Bank Accounts' }]}/g" src/app/finance/item4/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Finance' }, { label: 'Credit Cards' }\]}/breadcrumbs={[{ label: 'Finance' }, { label: 'Accounts' }, { label: 'Credit Cards' }]}/g" src/app/finance/item5/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Finance' }, { label: 'Reconciliation' }\]}/breadcrumbs={[{ label: 'Finance' }, { label: 'Accounts' }, { label: 'Reconciliation' }]}/g" src/app/finance/item6/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Finance' }, { label: 'Balance Sheet' }\]}/breadcrumbs={[{ label: 'Finance' }, { label: 'Reports' }, { label: 'Balance Sheet' }]}/g" src/app/finance/item7/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Finance' }, { label: 'Profit & Loss' }\]}/breadcrumbs={[{ label: 'Finance' }, { label: 'Reports' }, { label: 'Profit \& Loss' }]}/g" src/app/finance/item8/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Finance' }, { label: 'Tax Reports' }\]}/breadcrumbs={[{ label: 'Finance' }, { label: 'Reports' }, { label: 'Tax Reports' }]}/g" src/app/finance/item9/page.tsx

# Appointments section pages (item2 already updated)
sed -i '' "s/breadcrumbs={\[{ label: 'Appointments' }, { label: 'Calendar' }\]}/breadcrumbs={[{ label: 'Appointments' }, { label: 'Schedule' }, { label: 'Calendar' }]}/g" src/app/appointments/item1/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Appointments' }, { label: 'Time Slots' }\]}/breadcrumbs={[{ label: 'Appointments' }, { label: 'Schedule' }, { label: 'Time Slots' }]}/g" src/app/appointments/item3/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Appointments' }, { label: 'New Booking' }\]}/breadcrumbs={[{ label: 'Appointments' }, { label: 'Booking' }, { label: 'New Booking' }]}/g" src/app/appointments/item4/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Appointments' }, { label: 'Pending' }\]}/breadcrumbs={[{ label: 'Appointments' }, { label: 'Booking' }, { label: 'Pending' }]}/g" src/app/appointments/item5/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Appointments' }, { label: 'Confirmed' }\]}/breadcrumbs={[{ label: 'Appointments' }, { label: 'Booking' }, { label: 'Confirmed' }]}/g" src/app/appointments/item6/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Appointments' }, { label: 'Services' }\]}/breadcrumbs={[{ label: 'Appointments' }, { label: 'Settings' }, { label: 'Services' }]}/g" src/app/appointments/item7/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Appointments' }, { label: 'Resources' }\]}/breadcrumbs={[{ label: 'Appointments' }, { label: 'Settings' }, { label: 'Resources' }]}/g" src/app/appointments/item8/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Appointments' }, { label: 'Notifications' }\]}/breadcrumbs={[{ label: 'Appointments' }, { label: 'Settings' }, { label: 'Notifications' }]}/g" src/app/appointments/item9/page.tsx

# Classes section pages
sed -i '' "s/breadcrumbs={\[{ label: 'Classes' }, { label: 'All Classes' }\]}/breadcrumbs={[{ label: 'Classes' }, { label: 'Classes' }, { label: 'All Classes' }]}/g" src/app/classes/item1/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Classes' }, { label: 'Schedule' }\]}/breadcrumbs={[{ label: 'Classes' }, { label: 'Classes' }, { label: 'Schedule' }]}/g" src/app/classes/item2/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Classes' }, { label: 'Attendance' }\]}/breadcrumbs={[{ label: 'Classes' }, { label: 'Classes' }, { label: 'Attendance' }]}/g" src/app/classes/item3/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Classes' }, { label: 'All Instructors' }\]}/breadcrumbs={[{ label: 'Classes' }, { label: 'Instructors' }, { label: 'All Instructors' }]}/g" src/app/classes/item4/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Classes' }, { label: 'Assignments' }\]}/breadcrumbs={[{ label: 'Classes' }, { label: 'Instructors' }, { label: 'Assignments' }]}/g" src/app/classes/item5/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Classes' }, { label: 'Performance' }\]}/breadcrumbs={[{ label: 'Classes' }, { label: 'Instructors' }, { label: 'Performance' }]}/g" src/app/classes/item6/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Classes' }, { label: 'Class Types' }\]}/breadcrumbs={[{ label: 'Classes' }, { label: 'Management' }, { label: 'Class Types' }]}/g" src/app/classes/item7/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Classes' }, { label: 'Capacity' }\]}/breadcrumbs={[{ label: 'Classes' }, { label: 'Management' }, { label: 'Capacity' }]}/g" src/app/classes/item8/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Classes' }, { label: 'Settings' }\]}/breadcrumbs={[{ label: 'Classes' }, { label: 'Management' }, { label: 'Settings' }]}/g" src/app/classes/item9/page.tsx

# Communication section pages
sed -i '' "s/breadcrumbs={\[{ label: 'Communication' }, { label: 'Inbox' }\]}/breadcrumbs={[{ label: 'Communication' }, { label: 'Messages' }, { label: 'Inbox' }]}/g" src/app/communication/item1/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Communication' }, { label: 'Sent' }\]}/breadcrumbs={[{ label: 'Communication' }, { label: 'Messages' }, { label: 'Sent' }]}/g" src/app/communication/item2/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Communication' }, { label: 'Drafts' }\]}/breadcrumbs={[{ label: 'Communication' }, { label: 'Messages' }, { label: 'Drafts' }]}/g" src/app/communication/item3/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Communication' }, { label: 'Email Campaigns' }\]}/breadcrumbs={[{ label: 'Communication' }, { label: 'Campaigns' }, { label: 'Email Campaigns' }]}/g" src/app/communication/item4/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Communication' }, { label: 'SMS Campaigns' }\]}/breadcrumbs={[{ label: 'Communication' }, { label: 'Campaigns' }, { label: 'SMS Campaigns' }]}/g" src/app/communication/item5/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Communication' }, { label: 'Templates' }\]}/breadcrumbs={[{ label: 'Communication' }, { label: 'Campaigns' }, { label: 'Templates' }]}/g" src/app/communication/item6/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Communication' }, { label: 'Preferences' }\]}/breadcrumbs={[{ label: 'Communication' }, { label: 'Settings' }, { label: 'Preferences' }]}/g" src/app/communication/item7/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Communication' }, { label: 'Signatures' }\]}/breadcrumbs={[{ label: 'Communication' }, { label: 'Settings' }, { label: 'Signatures' }]}/g" src/app/communication/item8/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Communication' }, { label: 'Automation' }\]}/breadcrumbs={[{ label: 'Communication' }, { label: 'Settings' }, { label: 'Automation' }]}/g" src/app/communication/item9/page.tsx

# Analytics section pages
sed -i '' "s/breadcrumbs={\[{ label: 'Analytics' }, { label: 'Dashboard' }\]}/breadcrumbs={[{ label: 'Analytics' }, { label: 'Reports' }, { label: 'Dashboard' }]}/g" src/app/analytics/item1/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Analytics' }, { label: 'Custom Reports' }\]}/breadcrumbs={[{ label: 'Analytics' }, { label: 'Reports' }, { label: 'Custom Reports' }]}/g" src/app/analytics/item2/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Analytics' }, { label: 'Saved Reports' }\]}/breadcrumbs={[{ label: 'Analytics' }, { label: 'Reports' }, { label: 'Saved Reports' }]}/g" src/app/analytics/item3/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Analytics' }, { label: 'Performance' }\]}/breadcrumbs={[{ label: 'Analytics' }, { label: 'Metrics' }, { label: 'Performance' }]}/g" src/app/analytics/item4/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Analytics' }, { label: 'Trends' }\]}/breadcrumbs={[{ label: 'Analytics' }, { label: 'Metrics' }, { label: 'Trends' }]}/g" src/app/analytics/item5/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Analytics' }, { label: 'Comparisons' }\]}/breadcrumbs={[{ label: 'Analytics' }, { label: 'Metrics' }, { label: 'Comparisons' }]}/g" src/app/analytics/item6/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Analytics' }, { label: 'Data Export' }\]}/breadcrumbs={[{ label: 'Analytics' }, { label: 'Export' }, { label: 'Data Export' }]}/g" src/app/analytics/item7/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Analytics' }, { label: 'Scheduled Exports' }\]}/breadcrumbs={[{ label: 'Analytics' }, { label: 'Export' }, { label: 'Scheduled Exports' }]}/g" src/app/analytics/item8/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Analytics' }, { label: 'API Access' }\]}/breadcrumbs={[{ label: 'Analytics' }, { label: 'Export' }, { label: 'API Access' }]}/g" src/app/analytics/item9/page.tsx

# Sales section pages
sed -i '' "s/breadcrumbs={\[{ label: 'Sales' }, { label: 'All Orders' }\]}/breadcrumbs={[{ label: 'Sales' }, { label: 'Orders' }, { label: 'All Orders' }]}/g" src/app/sales/item1/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Sales' }, { label: 'Pending' }\]}/breadcrumbs={[{ label: 'Sales' }, { label: 'Orders' }, { label: 'Pending' }]}/g" src/app/sales/item2/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Sales' }, { label: 'Completed' }\]}/breadcrumbs={[{ label: 'Sales' }, { label: 'Orders' }, { label: 'Completed' }]}/g" src/app/sales/item3/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Sales' }, { label: 'All Products' }\]}/breadcrumbs={[{ label: 'Sales' }, { label: 'Products' }, { label: 'All Products' }]}/g" src/app/sales/item4/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Sales' }, { label: 'Categories' }\]}/breadcrumbs={[{ label: 'Sales' }, { label: 'Products' }, { label: 'Categories' }]}/g" src/app/sales/item5/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Sales' }, { label: 'Inventory' }\]}/breadcrumbs={[{ label: 'Sales' }, { label: 'Products' }, { label: 'Inventory' }]}/g" src/app/sales/item6/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Sales' }, { label: 'Sales Report' }\]}/breadcrumbs={[{ label: 'Sales' }, { label: 'Reports' }, { label: 'Sales Report' }]}/g" src/app/sales/item7/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Sales' }, { label: 'Best Sellers' }\]}/breadcrumbs={[{ label: 'Sales' }, { label: 'Reports' }, { label: 'Best Sellers' }]}/g" src/app/sales/item8/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Sales' }, { label: 'Revenue' }\]}/breadcrumbs={[{ label: 'Sales' }, { label: 'Reports' }, { label: 'Revenue' }]}/g" src/app/sales/item9/page.tsx

# Tasks section pages
sed -i '' "s/breadcrumbs={\[{ label: 'Tasks' }, { label: 'My Tasks' }\]}/breadcrumbs={[{ label: 'Tasks' }, { label: 'Tasks' }, { label: 'My Tasks' }]}/g" src/app/tasks/item1/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Tasks' }, { label: 'Team Tasks' }\]}/breadcrumbs={[{ label: 'Tasks' }, { label: 'Tasks' }, { label: 'Team Tasks' }]}/g" src/app/tasks/item2/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Tasks' }, { label: 'Completed' }\]}/breadcrumbs={[{ label: 'Tasks' }, { label: 'Tasks' }, { label: 'Completed' }]}/g" src/app/tasks/item3/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Tasks' }, { label: 'All Projects' }\]}/breadcrumbs={[{ label: 'Tasks' }, { label: 'Projects' }, { label: 'All Projects' }]}/g" src/app/tasks/item4/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Tasks' }, { label: 'Active' }\]}/breadcrumbs={[{ label: 'Tasks' }, { label: 'Projects' }, { label: 'Active' }]}/g" src/app/tasks/item5/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Tasks' }, { label: 'Archived' }\]}/breadcrumbs={[{ label: 'Tasks' }, { label: 'Projects' }, { label: 'Archived' }]}/g" src/app/tasks/item6/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Tasks' }, { label: 'Templates' }\]}/breadcrumbs={[{ label: 'Tasks' }, { label: 'Management' }, { label: 'Templates' }]}/g" src/app/tasks/item7/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Tasks' }, { label: 'Categories' }\]}/breadcrumbs={[{ label: 'Tasks' }, { label: 'Management' }, { label: 'Categories' }]}/g" src/app/tasks/item8/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Tasks' }, { label: 'Settings' }\]}/breadcrumbs={[{ label: 'Tasks' }, { label: 'Management' }, { label: 'Settings' }]}/g" src/app/tasks/item9/page.tsx

# Resources section pages
sed -i '' "s/breadcrumbs={\[{ label: 'Resources' }, { label: 'All Documents' }\]}/breadcrumbs={[{ label: 'Resources' }, { label: 'Documents' }, { label: 'All Documents' }]}/g" src/app/resources/item1/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Resources' }, { label: 'Templates' }\]}/breadcrumbs={[{ label: 'Resources' }, { label: 'Documents' }, { label: 'Templates' }]}/g" src/app/resources/item2/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Resources' }, { label: 'Shared' }\]}/breadcrumbs={[{ label: 'Resources' }, { label: 'Documents' }, { label: 'Shared' }]}/g" src/app/resources/item3/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Resources' }, { label: 'Images' }\]}/breadcrumbs={[{ label: 'Resources' }, { label: 'Media' }, { label: 'Images' }]}/g" src/app/resources/item4/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Resources' }, { label: 'Videos' }\]}/breadcrumbs={[{ label: 'Resources' }, { label: 'Media' }, { label: 'Videos' }]}/g" src/app/resources/item5/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Resources' }, { label: 'Audio' }\]}/breadcrumbs={[{ label: 'Resources' }, { label: 'Media' }, { label: 'Audio' }]}/g" src/app/resources/item6/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Resources' }, { label: 'Storage' }\]}/breadcrumbs={[{ label: 'Resources' }, { label: 'Management' }, { label: 'Storage' }]}/g" src/app/resources/item7/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Resources' }, { label: 'Permissions' }\]}/breadcrumbs={[{ label: 'Resources' }, { label: 'Management' }, { label: 'Permissions' }]}/g" src/app/resources/item8/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Resources' }, { label: 'Settings' }\]}/breadcrumbs={[{ label: 'Resources' }, { label: 'Management' }, { label: 'Settings' }]}/g" src/app/resources/item9/page.tsx

# Sports section pages
sed -i '' "s/breadcrumbs={\[{ label: 'Sports' }, { label: 'All Teams' }\]}/breadcrumbs={[{ label: 'Sports' }, { label: 'Teams' }, { label: 'All Teams' }]}/g" src/app/sports/item1/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Sports' }, { label: 'Schedule' }\]}/breadcrumbs={[{ label: 'Sports' }, { label: 'Teams' }, { label: 'Schedule' }]}/g" src/app/sports/item2/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Sports' }, { label: 'Roster' }\]}/breadcrumbs={[{ label: 'Sports' }, { label: 'Teams' }, { label: 'Roster' }]}/g" src/app/sports/item3/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Sports' }, { label: 'Matches' }\]}/breadcrumbs={[{ label: 'Sports' }, { label: 'Events' }, { label: 'Matches' }]}/g" src/app/sports/item4/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Sports' }, { label: 'Tournaments' }\]}/breadcrumbs={[{ label: 'Sports' }, { label: 'Events' }, { label: 'Tournaments' }]}/g" src/app/sports/item5/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Sports' }, { label: 'Results' }\]}/breadcrumbs={[{ label: 'Sports' }, { label: 'Events' }, { label: 'Results' }]}/g" src/app/sports/item6/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Sports' }, { label: 'Facilities' }\]}/breadcrumbs={[{ label: 'Sports' }, { label: 'Management' }, { label: 'Facilities' }]}/g" src/app/sports/item7/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Sports' }, { label: 'Equipment' }\]}/breadcrumbs={[{ label: 'Sports' }, { label: 'Management' }, { label: 'Equipment' }]}/g" src/app/sports/item8/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Sports' }, { label: 'Settings' }\]}/breadcrumbs={[{ label: 'Sports' }, { label: 'Management' }, { label: 'Settings' }]}/g" src/app/sports/item9/page.tsx

# Training section pages
sed -i '' "s/breadcrumbs={\[{ label: 'Training World' }, { label: 'All Courses' }\]}/breadcrumbs={[{ label: 'Training World' }, { label: 'Courses' }, { label: 'All Courses' }]}/g" src/app/training/item1/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Training World' }, { label: 'My Courses' }\]}/breadcrumbs={[{ label: 'Training World' }, { label: 'Courses' }, { label: 'My Courses' }]}/g" src/app/training/item2/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Training World' }, { label: 'Completed' }\]}/breadcrumbs={[{ label: 'Training World' }, { label: 'Courses' }, { label: 'Completed' }]}/g" src/app/training/item3/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Training World' }, { label: 'Lessons' }\]}/breadcrumbs={[{ label: 'Training World' }, { label: 'Content' }, { label: 'Lessons' }]}/g" src/app/training/item4/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Training World' }, { label: 'Quizzes' }\]}/breadcrumbs={[{ label: 'Training World' }, { label: 'Content' }, { label: 'Quizzes' }]}/g" src/app/training/item5/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Training World' }, { label: 'Materials' }\]}/breadcrumbs={[{ label: 'Training World' }, { label: 'Content' }, { label: 'Materials' }]}/g" src/app/training/item6/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Training World' }, { label: 'Instructors' }\]}/breadcrumbs={[{ label: 'Training World' }, { label: 'Management' }, { label: 'Instructors' }]}/g" src/app/training/item7/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Training World' }, { label: 'Certifications' }\]}/breadcrumbs={[{ label: 'Training World' }, { label: 'Management' }, { label: 'Certifications' }]}/g" src/app/training/item8/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Training World' }, { label: 'Settings' }\]}/breadcrumbs={[{ label: 'Training World' }, { label: 'Management' }, { label: 'Settings' }]}/g" src/app/training/item9/page.tsx

# Settings section pages
sed -i '' "s/breadcrumbs={\[{ label: 'Settings' }, { label: 'Organization' }\]}/breadcrumbs={[{ label: 'Settings' }, { label: 'General' }, { label: 'Organization' }]}/g" src/app/settings/item1/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Settings' }, { label: 'Preferences' }\]}/breadcrumbs={[{ label: 'Settings' }, { label: 'General' }, { label: 'Preferences' }]}/g" src/app/settings/item2/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Settings' }, { label: 'Branding' }\]}/breadcrumbs={[{ label: 'Settings' }, { label: 'General' }, { label: 'Branding' }]}/g" src/app/settings/item3/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Settings' }, { label: 'Users' }\]}/breadcrumbs={[{ label: 'Settings' }, { label: 'Security' }, { label: 'Users' }]}/g" src/app/settings/item4/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Settings' }, { label: 'Roles' }\]}/breadcrumbs={[{ label: 'Settings' }, { label: 'Security' }, { label: 'Roles' }]}/g" src/app/settings/item5/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Settings' }, { label: 'Permissions' }\]}/breadcrumbs={[{ label: 'Settings' }, { label: 'Security' }, { label: 'Permissions' }]}/g" src/app/settings/item6/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Settings' }, { label: 'APIs' }\]}/breadcrumbs={[{ label: 'Settings' }, { label: 'Integration' }, { label: 'APIs' }]}/g" src/app/settings/item7/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Settings' }, { label: 'Webhooks' }\]}/breadcrumbs={[{ label: 'Settings' }, { label: 'Integration' }, { label: 'Webhooks' }]}/g" src/app/settings/item8/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Settings' }, { label: 'Plugins' }\]}/breadcrumbs={[{ label: 'Settings' }, { label: 'Integration' }, { label: 'Plugins' }]}/g" src/app/settings/item9/page.tsx

# Help section pages
sed -i '' "s/breadcrumbs={\[{ label: 'Help & Support' }, { label: 'Getting Started' }\]}/breadcrumbs={[{ label: 'Help \& Support' }, { label: 'Support' }, { label: 'Getting Started' }]}/g" src/app/help/item1/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Help & Support' }, { label: 'Tutorials' }\]}/breadcrumbs={[{ label: 'Help \& Support' }, { label: 'Support' }, { label: 'Tutorials' }]}/g" src/app/help/item2/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Help & Support' }, { label: 'FAQs' }\]}/breadcrumbs={[{ label: 'Help \& Support' }, { label: 'Support' }, { label: 'FAQs' }]}/g" src/app/help/item3/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Help & Support' }, { label: 'Submit Ticket' }\]}/breadcrumbs={[{ label: 'Help \& Support' }, { label: 'Contact' }, { label: 'Submit Ticket' }]}/g" src/app/help/item4/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Help & Support' }, { label: 'Live Chat' }\]}/breadcrumbs={[{ label: 'Help \& Support' }, { label: 'Contact' }, { label: 'Live Chat' }]}/g" src/app/help/item5/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Help & Support' }, { label: 'Phone Support' }\]}/breadcrumbs={[{ label: 'Help \& Support' }, { label: 'Contact' }, { label: 'Phone Support' }]}/g" src/app/help/item6/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Help & Support' }, { label: 'Documentation' }\]}/breadcrumbs={[{ label: 'Help \& Support' }, { label: 'Resources' }, { label: 'Documentation' }]}/g" src/app/help/item7/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Help & Support' }, { label: 'Community' }\]}/breadcrumbs={[{ label: 'Help \& Support' }, { label: 'Resources' }, { label: 'Community' }]}/g" src/app/help/item8/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Help & Support' }, { label: 'Updates' }\]}/breadcrumbs={[{ label: 'Help \& Support' }, { label: 'Resources' }, { label: 'Updates' }]}/g" src/app/help/item9/page.tsx

# Shop section pages
sed -i '' "s/breadcrumbs={\[{ label: 'Shop' }, { label: 'All Products' }\]}/breadcrumbs={[{ label: 'Shop' }, { label: 'Products' }, { label: 'All Products' }]}/g" src/app/shop/item1/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Shop' }, { label: 'Categories' }\]}/breadcrumbs={[{ label: 'Shop' }, { label: 'Products' }, { label: 'Categories' }]}/g" src/app/shop/item2/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Shop' }, { label: 'Featured' }\]}/breadcrumbs={[{ label: 'Shop' }, { label: 'Products' }, { label: 'Featured' }]}/g" src/app/shop/item3/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Shop' }, { label: 'All Orders' }\]}/breadcrumbs={[{ label: 'Shop' }, { label: 'Orders' }, { label: 'All Orders' }]}/g" src/app/shop/item4/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Shop' }, { label: 'Pending' }\]}/breadcrumbs={[{ label: 'Shop' }, { label: 'Orders' }, { label: 'Pending' }]}/g" src/app/shop/item5/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Shop' }, { label: 'Shipped' }\]}/breadcrumbs={[{ label: 'Shop' }, { label: 'Orders' }, { label: 'Shipped' }]}/g" src/app/shop/item6/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Shop' }, { label: 'Inventory' }\]}/breadcrumbs={[{ label: 'Shop' }, { label: 'Management' }, { label: 'Inventory' }]}/g" src/app/shop/item7/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Shop' }, { label: 'Promotions' }\]}/breadcrumbs={[{ label: 'Shop' }, { label: 'Management' }, { label: 'Promotions' }]}/g" src/app/shop/item8/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Shop' }, { label: 'Settings' }\]}/breadcrumbs={[{ label: 'Shop' }, { label: 'Management' }, { label: 'Settings' }]}/g" src/app/shop/item9/page.tsx

# Marketplace section pages
sed -i '' "s/breadcrumbs={\[{ label: 'Marketplace' }, { label: 'All Listings' }\]}/breadcrumbs={[{ label: 'Marketplace' }, { label: 'Listings' }, { label: 'All Listings' }]}/g" src/app/marketplace/item1/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Marketplace' }, { label: 'My Listings' }\]}/breadcrumbs={[{ label: 'Marketplace' }, { label: 'Listings' }, { label: 'My Listings' }]}/g" src/app/marketplace/item2/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Marketplace' }, { label: 'Featured' }\]}/breadcrumbs={[{ label: 'Marketplace' }, { label: 'Listings' }, { label: 'Featured' }]}/g" src/app/marketplace/item3/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Marketplace' }, { label: 'Purchases' }\]}/breadcrumbs={[{ label: 'Marketplace' }, { label: 'Transactions' }, { label: 'Purchases' }]}/g" src/app/marketplace/item4/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Marketplace' }, { label: 'Sales' }\]}/breadcrumbs={[{ label: 'Marketplace' }, { label: 'Transactions' }, { label: 'Sales' }]}/g" src/app/marketplace/item5/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Marketplace' }, { label: 'History' }\]}/breadcrumbs={[{ label: 'Marketplace' }, { label: 'Transactions' }, { label: 'History' }]}/g" src/app/marketplace/item6/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Marketplace' }, { label: 'Sellers' }\]}/breadcrumbs={[{ label: 'Marketplace' }, { label: 'Management' }, { label: 'Sellers' }]}/g" src/app/marketplace/item7/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Marketplace' }, { label: 'Reviews' }\]}/breadcrumbs={[{ label: 'Marketplace' }, { label: 'Management' }, { label: 'Reviews' }]}/g" src/app/marketplace/item8/page.tsx
sed -i '' "s/breadcrumbs={\[{ label: 'Marketplace' }, { label: 'Settings' }\]}/breadcrumbs={[{ label: 'Marketplace' }, { label: 'Management' }, { label: 'Settings' }]}/g" src/app/marketplace/item9/page.tsx

echo "Section pages updated successfully!"
