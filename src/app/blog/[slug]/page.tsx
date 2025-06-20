import type { Metadata } from 'next';
import { Suspense, cache } from 'react';
import { notFound } from 'next/navigation';
// import ViewCounter from '../view-counter';
// import { increment } from 'app/db/actions';
import { unstable_noStore as noStore } from 'next/cache';
import { CustomMDX } from '@/components/mdx/mdx';
import { getBlogPosts } from '@/lib/mdx';
import MDXContainer from '@/layout/MDXContainer';
import Container from '@/components/Container';
import Shimmer from '@/components/Shimmer';

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  let ogImage = image
    ? `https://vikassatpute.com${image}`
    : `https://vikassatpute.com/og?title=${title}`;

  // console.log({ ogImage });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://vikassatpute.com/blog/${post.slug}`,
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

function formatDate(date: string) {
  noStore();
  let currentDate = new Date().getTime();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (daysAgo < 1) {
    return 'Today';
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}

import SchemaScript from '@/components/SchemaScript';
import { generateBlogPostSchema } from '@/lib/schema';

export default async function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const blogSchema = generateBlogPostSchema(params.slug);

  return (
    <Container>
      <Suspense
        fallback={
          <div className="h-4 w-full">
            <Shimmer />
          </div>
        }
      >
        {blogSchema && <SchemaScript schema={blogSchema} />}
        <h1 className="title text-2xl font-medium tracking-tighter">{post.metadata.title}</h1>
        <div className="mb-8 mt-2 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>

          <CustomMDX slug={post.slug} />
        </div>
        <article>
          <MDXContainer content={post.content} />
        </article>
      </Suspense>
    </Container>
    // async function Views({ slug }: { slug: string }) {
  );
}

// let incrementViews = cache(increment);

//   let views = await getViewsCount();
//   incrementViews(slug);
//   return <ViewCounter allViews={views} slug={slug} />;
// }
