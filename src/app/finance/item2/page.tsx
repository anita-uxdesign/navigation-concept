import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { financeSubNav } from '@/config/navigation';

export default function FinanceItem2Page() {
  return (
    <AppLayout subNavSections={financeSubNav} subNavTitle="Finance" basePath="/finance">
      <PageContent
        breadcrumbs={[{ label: 'Finance' }, { label: 'Transactions' }, { label: 'Invoices' }]}
        title="Invoices"
      />
    </AppLayout>
  );
}
