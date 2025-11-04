import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { shopSubNav } from '@/config/navigation';

export default function ShopItem1Page() {
  return (
    <AppLayout subNavSections={shopSubNav} subNavTitle="Shop" basePath="/shop">
      <PageContent
        breadcrumbs={[{ label: 'Shop' }, { label: 'All Products' }]}
        title="All Products"
      />
    </AppLayout>
  );
}
