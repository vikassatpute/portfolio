import type { Metadata } from 'next';
import { Inter, Patua_One } from 'next/font/google';
import './globals.css';
import MainLayout from '@/layout/MainLayout';

const inter = Inter({ subsets: ['latin'] });
const patua_One = Patua_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-patua-one',
});

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  console.log({ params });
  const title = 'Vikas Satpute';
  const description = 'Web/Frontend developer';
  let ogImage = `https://vikassatpute.com/og?title=${title}`;
  console.log({ ogImage });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://vikassatpute.com/`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
