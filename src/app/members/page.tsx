import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { membersSubNav } from '@/config/navigation';

export default function MembersPage() {
  return (
    <AppLayout subNavSections={membersSubNav} subNavTitle="Members" basePath="/members">
      <PageContent
        breadcrumbs={[{ label: 'Members' }, { label: 'Overview' }]}
        title="Members"
      />
    </AppLayout>
  );
}
