import Container from '@/components/Container';
import MDXContainer from '@/layout/MDXContainer';
import { getPageContent } from '@/lib/mdx';
import { Metadata } from 'next';
import { headers } from 'next/headers';
export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  console.log({ params });
  const title = 'Story: Vikas Satpute';
  const description = 'Web/Frontend developer';
  let ogImage = `https://vikassatpute.com/og?title=${title}`;
  console.log({ ogImage });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
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
export default async function StoryPage() {
  const headersList = headers();
  const pathname = headersList.get('X-Pathname');
  const post = getPageContent().find((post) => post.slug === pathname);
  if (!post) return;
  return (
    <Container>
      <MDXContainer content={post.content} />
    </Container>
  );
}
