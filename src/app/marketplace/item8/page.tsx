import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { marketplaceSubNav } from '@/config/navigation';

export default function MarketplaceItem8Page() {
  return (
    <AppLayout subNavSections={marketplaceSubNav} subNavTitle="Marketplace" basePath="/marketplace">
      <PageContent
        breadcrumbs={[{ label: 'Marketplace' }, { label: 'Management' }, { label: 'Reviews' }]}
        title="Reviews"
      />
    </AppLayout>
  );
}
