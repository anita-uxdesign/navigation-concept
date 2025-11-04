import type { Metadata } from 'next';
import ThemeRegistry from '@/components/ThemeRegistry';
import { NavigationProvider } from '@/contexts/NavigationContext';

export const metadata: Metadata = {
  title: 'Navigation App',
  description: 'Modern navigation design with MUI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeRegistry>
          <NavigationProvider>
            {children}
          </NavigationProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}

