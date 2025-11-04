import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { membersSubNav } from '@/config/navigation';

export default function MembersItem4Page() {
  return (
    <AppLayout subNavSections={membersSubNav} subNavTitle="Members" basePath="/members">
      <PageContent
        breadcrumbs={[{ label: 'Members' }, { label: 'All Groups' }]}
        title="All Groups"
      />
    </AppLayout>
  );
}
