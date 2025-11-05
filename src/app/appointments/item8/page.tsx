import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { appointmentsSubNav } from '@/config/navigation';

export default function AppointmentsItem8Page() {
  return (
    <AppLayout subNavSections={appointmentsSubNav} subNavTitle="Appointments" basePath="/appointments">
      <PageContent
        breadcrumbs={[{ label: 'Appointments' }, { label: 'Settings' }, { label: 'Resources' }]}
        title="Resources"
      />
    </AppLayout>
  );
}
