import AppLayout from '@/components/AppLayout';
import PageContent from '@/components/PageContent';
import { analyticsSubNav } from '@/config/navigation';

export default function AnalyticsPage() {
  return (
    <AppLayout subNavSections={analyticsSubNav} subNavTitle="Analytics" basePath="/analytics">
      <PageContent
        breadcrumbs={[{ label: 'Analytics' }, { label: 'Overview' }]}
        title="Analytics"
      />
    </AppLayout>
  );
}
