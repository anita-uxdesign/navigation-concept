import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { classesSubNav } from '@/config/navigation';

export default function ClassesItem6Page() {
  return (
    <AppLayout subNavSections={classesSubNav} subNavTitle="Classes" basePath="/classes">
      <PageContent
        breadcrumbs={[{ label: 'Classes' }, { label: 'Instructors' }, { label: 'Performance' }]}
        title="Performance"
      />
    </AppLayout>
  );
}
