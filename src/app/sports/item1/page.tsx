import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { sportsSubNav } from '@/config/navigation';

export default function SportsItem1Page() {
  return (
    <AppLayout subNavSections={sportsSubNav} subNavTitle="Sports" basePath="/sports">
      <PageContent
        breadcrumbs={[{ label: 'Sports' }, { label: 'Teams' }, { label: 'All Teams' }]}
        title="All Teams"
      />
    </AppLayout>
  );
}
