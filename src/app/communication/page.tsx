import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { communicationSubNav } from '@/config/navigation';

export default function CommunicationPage() {
  return (
    <AppLayout subNavSections={communicationSubNav} subNavTitle="Communication" basePath="/communication">
      <PageContent
        breadcrumbs={[{ label: 'Communication' }, { label: 'Overview' }]}
        title="Communication"
      />
    </AppLayout>
  );
}
