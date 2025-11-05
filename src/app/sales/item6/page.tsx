import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { salesSubNav } from '@/config/navigation';

export default function SalesItem6Page() {
  return (
    <AppLayout subNavSections={salesSubNav} subNavTitle="Sales" basePath="/sales">
      <PageContent
        breadcrumbs={[{ label: 'Sales' }, { label: 'Products' }, { label: 'Inventory' }]}
        title="Inventory"
      />
    </AppLayout>
  );
}
