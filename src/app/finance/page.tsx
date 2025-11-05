import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { financeSubNav } from '@/config/navigation';

export default function FinancePage() {
  return (
    <AppLayout subNavSections={financeSubNav} subNavTitle="Finance" basePath="/finance">
      <PageContent
        breadcrumbs={[{ label: 'Finance' }, { label: 'Overview' }]}
        title="Finance"
      />
    </AppLayout>
  );
}
