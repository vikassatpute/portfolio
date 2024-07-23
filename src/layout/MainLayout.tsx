import Navbar from '@/components/Navbar';
import React from 'react';
function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="overflow-hidden">
      <section className="main-wrapper relative h-dvh overflow-y-auto bg-cover bg-fixed px-4">
        <div className="gradient fixed inset-0 z-10 h-full w-full"></div>
        <div className="relative z-10 h-dvh">{children}</div>
        <Navbar />
      </section>
    </main>
  );
}

export default MainLayout;
