import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { marketplaceSubNav } from '@/config/navigation';

export default function MarketplaceItem6Page() {
  return (
    <AppLayout subNavSections={marketplaceSubNav} subNavTitle="Marketplace" basePath="/marketplace">
      <PageContent
        breadcrumbs={[{ label: 'Marketplace' }, { label: 'History' }]}
        title="History"
      />
    </AppLayout>
  );
}
