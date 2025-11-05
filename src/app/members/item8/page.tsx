import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { membersSubNav } from '@/config/navigation';

export default function MembersItem8Page() {
  return (
    <AppLayout subNavSections={membersSubNav} subNavTitle="Members" basePath="/members">
      <PageContent
        breadcrumbs={[{ label: 'Members' }, { label: 'Reports' }, { label: 'Analytics' }]}
        title="Analytics"
      />
    </AppLayout>
  );
}
