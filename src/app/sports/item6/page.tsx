import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { sportsSubNav } from '@/config/navigation';

export default function SportsItem6Page() {
  return (
    <AppLayout subNavSections={sportsSubNav} subNavTitle="Sports" basePath="/sports">
      <PageContent
        breadcrumbs={[{ label: 'Sports' }, { label: 'Events' }, { label: 'Results' }]}
        title="Results"
      />
    </AppLayout>
  );
}
