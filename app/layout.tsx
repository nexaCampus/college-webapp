import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import CrispNavbar from '@/components/layout/CrispNavbar';
import InstitutionalFooter from '@/components/layout/InstitutionalFooter';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NexaCampus College — Academic Portal & Proctored Examination Suite',
  description: 'Official collegiate portal for students and faculty — Lions Calcutta Greater Vidya Mandir & College (UGC & CISCE Affiliated).',
  applicationName: 'NexaCampus College',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'NexaCampus College',
  },
  icons: {
    icon: [
      { url: '/icons/icon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#0c1a30',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${poppins.className}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-on-surface font-sans antialiased selection:bg-primary-container selection:text-white">
        <CrispNavbar />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <InstitutionalFooter />
      </body>
    </html>
  );
}
