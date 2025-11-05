#!/bin/bash

# Update all overview pages to add " > Overview" format
# Overview pages
sed -i '' 's/breadcrumbs={\[{ label: '\''Members'\'' }\]}/breadcrumbs={[{ label: '\''Members'\'' }, { label: '\''Overview'\'' }]}/g' src/app/members/page.tsx
sed -i '' 's/breadcrumbs={\[{ label: '\''Finance'\'' }\]}/breadcrumbs={[{ label: '\''Finance'\'' }, { label: '\''Overview'\'' }]}/g' src/app/finance/page.tsx
sed -i '' 's/breadcrumbs={\[{ label: '\''Classes'\'' }\]}/breadcrumbs={[{ label: '\''Classes'\'' }, { label: '\''Overview'\'' }]}/g' src/app/classes/page.tsx
sed -i '' 's/breadcrumbs={\[{ label: '\''Communication'\'' }\]}/breadcrumbs={[{ label: '\''Communication'\'' }, { label: '\''Overview'\'' }]}/g' src/app/communication/page.tsx
sed -i '' 's/breadcrumbs={\[{ label: '\''Analytics'\'' }\]}/breadcrumbs={[{ label: '\''Analytics'\'' }, { label: '\''Overview'\'' }]}/g' src/app/analytics/page.tsx
sed -i '' 's/breadcrumbs={\[{ label: '\''Sales'\'' }\]}/breadcrumbs={[{ label: '\''Sales'\'' }, { label: '\''Overview'\'' }]}/g' src/app/sales/page.tsx
sed -i '' 's/breadcrumbs={\[{ label: '\''Tasks'\'' }\]}/breadcrumbs={[{ label: '\''Tasks'\'' }, { label: '\''Overview'\'' }]}/g' src/app/tasks/page.tsx
sed -i '' 's/breadcrumbs={\[{ label: '\''Resources'\'' }\]}/breadcrumbs={[{ label: '\''Resources'\'' }, { label: '\''Overview'\'' }]}/g' src/app/resources/page.tsx
sed -i '' 's/breadcrumbs={\[{ label: '\''Sports'\'' }\]}/breadcrumbs={[{ label: '\''Sports'\'' }, { label: '\''Overview'\'' }]}/g' src/app/sports/page.tsx
sed -i '' 's/breadcrumbs={\[{ label: '\''Training World'\'' }\]}/breadcrumbs={[{ label: '\''Training World'\'' }, { label: '\''Overview'\'' }]}/g' src/app/training/page.tsx
sed -i '' 's/breadcrumbs={\[{ label: '\''Settings'\'' }\]}/breadcrumbs={[{ label: '\''Settings'\'' }, { label: '\''Overview'\'' }]}/g' src/app/settings/page.tsx
sed -i '' 's/breadcrumbs={\[{ label: '\''Help & Support'\'' }\]}/breadcrumbs={[{ label: '\''Help \& Support'\'' }, { label: '\''Overview'\'' }]}/g' src/app/help/page.tsx
sed -i '' 's/breadcrumbs={\[{ label: '\''Shop'\'' }\]}/breadcrumbs={[{ label: '\''Shop'\'' }, { label: '\''Overview'\'' }]}/g' src/app/shop/page.tsx
sed -i '' 's/breadcrumbs={\[{ label: '\''Marketplace'\'' }\]}/breadcrumbs={[{ label: '\''Marketplace'\'' }, { label: '\''Overview'\'' }]}/g' src/app/marketplace/page.tsx

echo "Overview pages updated successfully!"
