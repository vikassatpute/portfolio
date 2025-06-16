import type { Metadata } from 'next';
import { Inter, Patua_One } from 'next/font/google';
import localFont from 'next/font/local';

import '@/styles/globals.css';
import MainLayout from '@/layout/MainLayout';
import NextTopLoader from 'nextjs-toploader';

import LarkenFont from '@/lib/larkenFont';

const patua_One = Patua_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-patua-one',
});

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

// let ogImage = `https://vikassatpute.com/og?title=Web/Frontend%20Developer`;
export const metadata: Metadata = {
  metadataBase: new URL('https://vikassatpute.com'),
  title: {
    default: 'Vikas Satpute',
    template: '%s | Vikas Satpute',
  },
  description: 'Developer, writer',
  openGraph: {
    title: 'Vikas Satpute',
    description: 'Developer, writer.',
    url: 'https://vikassatpute.com',
    siteName: 'Vikas Satpute',
    locale: 'en_US',
    type: 'website',
    // images: [
    //   {
    //     url: ogImage,
    //   },
    // ],
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
    // images: [ogImage],
  },
};

import SchemaScript from '@/components/SchemaScript';
import { generateWebsiteSchema } from '@/lib/schema';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en" className={`${LarkenFont.variable}`}>
      <head>
        <SchemaScript schema={websiteSchema} />
      </head>
      <body className={`${satoshi.className} dark`}>
        <NextTopLoader color="rgb(245 158 11)" />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
