import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { classesSubNav } from '@/config/navigation';

export default function ClassesItem3Page() {
  return (
    <AppLayout subNavSections={classesSubNav} subNavTitle="Classes" basePath="/classes">
      <PageContent
        breadcrumbs={[{ label: 'Classes' }, { label: 'Classes' }, { label: 'Attendance' }]}
        title="Attendance"
      />
    </AppLayout>
  );
}
