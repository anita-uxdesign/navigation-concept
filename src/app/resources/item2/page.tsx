import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { resourcesSubNav } from '@/config/navigation';

export default function ResourcesItem2Page() {
  return (
    <AppLayout subNavSections={resourcesSubNav} subNavTitle="Resources" basePath="/resources">
      <PageContent
        breadcrumbs={[{ label: 'Resources' }, { label: 'Templates' }]}
        title="Templates"
      />
    </AppLayout>
  );
}
