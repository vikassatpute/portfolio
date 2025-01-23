import Container from '@/components/Container';
import MDXContainer from '@/layout/MDXContainer';
import { getProjectsContent } from '@/lib/mdx';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  let post = getProjectsContent().find((post) => post.slug === params.slug);
  if (!post) return;
  let {
    title = '',
    publishedAt: publishedTime = '',
    summary: description = '',
    image = '',
  } = post?.metadata || {};

  let ogImage = image
    ? `https://vikassatpute.com${image}`
    : `https://vikassatpute.com/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://vikassatpute.com/projects/${post.slug}`,
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
export default async function ProjectPage({ params }: { params: { slug: string } }) {
  let post = getProjectsContent().find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  return (
    <Container>
      <MDXContainer content={post.content} />
    </Container>
  );
}
