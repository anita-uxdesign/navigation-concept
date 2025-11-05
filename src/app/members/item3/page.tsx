import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { membersSubNav } from '@/config/navigation';

export default function MembersItem3Page() {
  return (
    <AppLayout subNavSections={membersSubNav} subNavTitle="Members" basePath="/members">
      <PageContent
        breadcrumbs={[{ label: 'Members' }, { label: 'Member' }, { label: 'History' }]}
        title="History"
      />
    </AppLayout>
  );
}
