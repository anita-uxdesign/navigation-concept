import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { helpSubNav } from '@/config/navigation';

export default function HelpItem7Page() {
  return (
    <AppLayout subNavSections={helpSubNav} subNavTitle="Help & Support" basePath="/help">
      <PageContent
        breadcrumbs={[{ label: 'Help & Support' }, { label: 'Documentation' }]}
        title="Documentation"
      />
    </AppLayout>
  );
}
