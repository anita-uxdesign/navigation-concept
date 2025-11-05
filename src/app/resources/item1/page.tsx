import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { resourcesSubNav } from '@/config/navigation';

export default function ResourcesItem1Page() {
  return (
    <AppLayout subNavSections={resourcesSubNav} subNavTitle="Resources" basePath="/resources">
      <PageContent
        breadcrumbs={[{ label: 'Resources' }, { label: 'Documents' }, { label: 'All Documents' }]}
        title="All Documents"
      />
    </AppLayout>
  );
}
