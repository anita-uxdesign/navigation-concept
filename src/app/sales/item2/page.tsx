import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { salesSubNav } from '@/config/navigation';

export default function SalesItem2Page() {
  return (
    <AppLayout subNavSections={salesSubNav} subNavTitle="Sales" basePath="/sales">
      <PageContent
        breadcrumbs={[{ label: 'Sales' }, { label: 'Orders' }, { label: 'Pending' }]}
        title="Pending"
      />
    </AppLayout>
  );
}
