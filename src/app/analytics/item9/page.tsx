import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { analyticsSubNav } from '@/config/navigation';

export default function AnalyticsItem9Page() {
  return (
    <AppLayout subNavSections={analyticsSubNav} subNavTitle="Analytics" basePath="/analytics">
      <PageContent
        breadcrumbs={[{ label: 'Analytics' }, { label: 'Export' }, { label: 'API Access' }]}
        title="API Access"
      />
    </AppLayout>
  );
}
