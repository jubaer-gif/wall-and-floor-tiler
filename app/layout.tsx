import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Tiler Pro — Wall & Floor Tiler Guide',
  description: 'বাংলায় Wall & Floor Tiling workflow, tools guide এবং tile material calculator.',
  applicationName: 'Tiler Pro',
  manifest: '/manifest.json',
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Tiler Pro' },
};
export const viewport: Viewport = { themeColor: '#16834a', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="bn"><body>{children}</body></html>;
}
