import type { Metadata } from 'next';
import { Inter, Patua_One } from 'next/font/google';
import './globals.css';
import MainLayout from '@/layout/MainLayout';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] });
const patua_One = Patua_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-patua-one',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vikassatpute.com'),
  title: {
    default: 'Vikas Satpute',
    template: '%s | Vikas Satpute',
  },
  description: 'Developer, writer',
  openGraph: {
    title: 'Vikas Satpute',
    description: 'Developer, writer, and creator.',
    url: 'https://vikassatpute.com',
    siteName: 'Vikas Satpute',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Vikas Satpute',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <NextTopLoader color="rgb(245 158 11)" />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
