import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { marketplaceSubNav } from '@/config/navigation';

export default function MarketplaceItem3Page() {
  return (
    <AppLayout subNavSections={marketplaceSubNav} subNavTitle="Marketplace" basePath="/marketplace">
      <PageContent
        breadcrumbs={[{ label: 'Marketplace' }, { label: 'Listings' }, { label: 'Featured' }]}
        title="Featured"
      />
    </AppLayout>
  );
}
