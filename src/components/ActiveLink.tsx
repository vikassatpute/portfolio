'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

// This *client* component will be imported into a blog layout
export default function ActiveLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  // Navigating to `/blog/hello-world` will return 'hello-world'
  // for the selected layout segment
  const segment = useSelectedLayoutSegment();
  // console.log({ segment });
  const isActive = href === segment;

  return (
    <Link
      href={`/${href}`}
      className={`${isActive ? 'color-gradient underline' : ''} hover:color-gradient hover:underline hover:decoration-white`}
    >
      {children}
    </Link>
  );
}
