import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { appointmentsSubNav } from '@/config/navigation';

export default function AppointmentsItem9Page() {
  return (
    <AppLayout subNavSections={appointmentsSubNav} subNavTitle="Appointments" basePath="/appointments">
      <PageContent
        breadcrumbs={[{ label: 'Appointments' }, { label: 'Settings' }, { label: 'Notifications' }]}
        title="Notifications"
      />
    </AppLayout>
  );
}
