import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { sportsSubNav } from '@/config/navigation';

export default function SportsItem4Page() {
  return (
    <AppLayout subNavSections={sportsSubNav} subNavTitle="Sports" basePath="/sports">
      <PageContent
        breadcrumbs={[{ label: 'Sports' }, { label: 'Events' }, { label: 'Matches' }]}
        title="Matches"
      />
    </AppLayout>
  );
}
