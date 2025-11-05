import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { appointmentsSubNav } from '@/config/navigation';

export default function AppointmentsItem5Page() {
  return (
    <AppLayout subNavSections={appointmentsSubNav} subNavTitle="Appointments" basePath="/appointments">
      <PageContent
        breadcrumbs={[{ label: 'Appointments' }, { label: 'Booking' }, { label: 'Pending' }]}
        title="Pending"
      />
    </AppLayout>
  );
}
