import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { tasksSubNav } from '@/config/navigation';

export default function TasksItem6Page() {
  return (
    <AppLayout subNavSections={tasksSubNav} subNavTitle="Tasks" basePath="/tasks">
      <PageContent
        breadcrumbs={[{ label: 'Tasks' }, { label: 'Archived' }]}
        title="Archived"
      />
    </AppLayout>
  );
}
