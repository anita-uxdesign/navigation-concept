import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { salesSubNav } from '@/config/navigation';

export default function SalesPage() {
  return (
    <AppLayout subNavSections={salesSubNav} subNavTitle="Sales" basePath="/sales">
      <PageContent
        breadcrumbs={[{ label: 'Sales' }]}
        title="Sales"
      />
    </AppLayout>
  );
}
