import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { appointmentsSubNav } from '@/config/navigation';

export default function AppointmentsItem7Page() {
  return (
    <AppLayout subNavSections={appointmentsSubNav} subNavTitle="Appointments" basePath="/appointments">
      <PageContent
        breadcrumbs={[{ label: 'Appointments' }, { label: 'Settings' }, { label: 'Services' }]}
        title="Services"
      />
    </AppLayout>
  );
}
