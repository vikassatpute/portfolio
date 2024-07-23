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

export const metadata: Metadata = {
  title: 'Home: Vikas Satpute',
  description: 'Home page web frontend developer',
};

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
