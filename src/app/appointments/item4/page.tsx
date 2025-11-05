import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { appointmentsSubNav } from '@/config/navigation';

export default function AppointmentsItem4Page() {
  return (
    <AppLayout subNavSections={appointmentsSubNav} subNavTitle="Appointments" basePath="/appointments">
      <PageContent
        breadcrumbs={[{ label: 'Appointments' }, { label: 'Booking' }, { label: 'New Booking' }]}
        title="New Booking"
      />
    </AppLayout>
  );
}
