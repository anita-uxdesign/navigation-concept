import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { shopSubNav } from '@/config/navigation';

export default function ShopItem3Page() {
  return (
    <AppLayout subNavSections={shopSubNav} subNavTitle="Shop" basePath="/shop">
      <PageContent
        breadcrumbs={[{ label: 'Shop' }, { label: 'Products' }, { label: 'Featured' }]}
        title="Featured"
      />
    </AppLayout>
  );
}
