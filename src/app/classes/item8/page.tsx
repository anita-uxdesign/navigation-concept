import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { classesSubNav } from '@/config/navigation';

export default function ClassesItem8Page() {
  return (
    <AppLayout subNavSections={classesSubNav} subNavTitle="Classes" basePath="/classes">
      <PageContent
        breadcrumbs={[{ label: 'Classes' }, { label: 'Management' }, { label: 'Capacity' }]}
        title="Capacity"
      />
    </AppLayout>
  );
}
