import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { resourcesSubNav } from '@/config/navigation';

export default function ResourcesItem4Page() {
  return (
    <AppLayout subNavSections={resourcesSubNav} subNavTitle="Resources" basePath="/resources">
      <PageContent
        breadcrumbs={[{ label: 'Resources' }, { label: 'Images' }]}
        title="Images"
      />
    </AppLayout>
  );
}
