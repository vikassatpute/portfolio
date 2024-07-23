import MDXContainer from '@/layout/MDXContainer';
import { headers } from 'next/headers';

export default async function StoryPage() {
  const headersList = headers();
  const pathname = headersList.get('X-Pathname');
  return <MDXContainer slug={`${pathname}`} />;
}
