import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { tasksSubNav } from '@/config/navigation';

export default function TasksItem8Page() {
  return (
    <AppLayout subNavSections={tasksSubNav} subNavTitle="Tasks" basePath="/tasks">
      <PageContent
        breadcrumbs={[{ label: 'Tasks' }, { label: 'Management' }, { label: 'Categories' }]}
        title="Categories"
      />
    </AppLayout>
  );
}
