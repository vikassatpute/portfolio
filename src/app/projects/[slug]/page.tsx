import MDXContainer from '@/layout/MDXContainer';
import { getBlogPosts } from '@/lib/mdx';
import { Metadata } from 'next';

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  let { title, publishedAt: publishedTime, summary: description, image } = post?.metadata;
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
  return <MDXContainer slug={`${params.slug}`} />;
}
