import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { communicationSubNav } from '@/config/navigation';

export default function CommunicationItem6Page() {
  return (
    <AppLayout subNavSections={communicationSubNav} subNavTitle="Communication" basePath="/communication">
      <PageContent
        breadcrumbs={[{ label: 'Communication' }, { label: 'Templates' }]}
        title="Templates"
      />
    </AppLayout>
  );
}
