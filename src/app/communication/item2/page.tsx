import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { communicationSubNav } from '@/config/navigation';

export default function CommunicationItem2Page() {
  return (
    <AppLayout subNavSections={communicationSubNav} subNavTitle="Communication" basePath="/communication">
      <PageContent
        breadcrumbs={[{ label: 'Communication' }, { label: 'Messages' }, { label: 'Sent' }]}
        title="Sent"
      />
    </AppLayout>
  );
}
