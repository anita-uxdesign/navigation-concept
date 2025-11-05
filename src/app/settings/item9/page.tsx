import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { settingsSubNav } from '@/config/navigation';

export default function SettingsItem9Page() {
  return (
    <AppLayout subNavSections={settingsSubNav} subNavTitle="Settings" basePath="/settings">
      <PageContent
        breadcrumbs={[{ label: 'Settings' }, { label: 'Integration' }, { label: 'Plugins' }]}
        title="Plugins"
      />
    </AppLayout>
  );
}
