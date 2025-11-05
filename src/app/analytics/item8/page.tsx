import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { analyticsSubNav } from '@/config/navigation';

export default function AnalyticsItem8Page() {
  return (
    <AppLayout subNavSections={analyticsSubNav} subNavTitle="Analytics" basePath="/analytics">
      <PageContent
        breadcrumbs={[{ label: 'Analytics' }, { label: 'Export' }, { label: 'Scheduled Exports' }]}
        title="Scheduled Exports"
      />
    </AppLayout>
  );
}
