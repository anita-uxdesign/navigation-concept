import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { trainingSubNav } from '@/config/navigation';

export default function TrainingItem1Page() {
  return (
    <AppLayout subNavSections={trainingSubNav} subNavTitle="Training World" basePath="/training">
      <PageContent
        breadcrumbs={[{ label: 'Training World' }, { label: 'Courses' }, { label: 'All Courses' }]}
        title="All Courses"
      />
    </AppLayout>
  );
}
