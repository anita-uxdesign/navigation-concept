import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { trainingSubNav } from '@/config/navigation';

export default function TrainingItem7Page() {
  return (
    <AppLayout subNavSections={trainingSubNav} subNavTitle="Training World" basePath="/training">
      <PageContent
        breadcrumbs={[{ label: 'Training World' }, { label: 'Management' }, { label: 'Instructors' }]}
        title="Instructors"
      />
    </AppLayout>
  );
}
