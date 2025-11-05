import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { communicationSubNav } from '@/config/navigation';

export default function CommunicationItem1Page() {
  return (
    <AppLayout subNavSections={communicationSubNav} subNavTitle="Communication" basePath="/communication">
      <PageContent
        breadcrumbs={[{ label: 'Communication' }, { label: 'Messages' }, { label: 'Inbox' }]}
        title="Inbox"
      />
    </AppLayout>
  );
}
