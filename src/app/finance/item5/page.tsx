import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { financeSubNav } from '@/config/navigation';

export default function FinanceItem5Page() {
  return (
    <AppLayout subNavSections={financeSubNav} subNavTitle="Finance" basePath="/finance">
      <PageContent
        breadcrumbs={[{ label: 'Finance' }, { label: 'Accounts' }, { label: 'Credit Cards' }]}
        title="Credit Cards"
      />
    </AppLayout>
  );
}
