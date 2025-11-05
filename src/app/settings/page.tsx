import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { settingsSubNav } from '@/config/navigation';

export default function SettingsPage() {
  return (
    <AppLayout subNavSections={settingsSubNav} subNavTitle="Settings" basePath="/settings">
      <PageContent
        breadcrumbs={[{ label: 'Settings' }, { label: 'Overview' }]}
        title="Settings"
      />
    </AppLayout>
  );
}
