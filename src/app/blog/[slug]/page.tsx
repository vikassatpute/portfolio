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

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  let ogImage = image
    ? `https://vikassatpute.com${image}`
    : `https://vikassatpute.com/og?title=${title}`;

  console.log({ ogImage });

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

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Container>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://vikassatpute.com${post.metadata.image}`
              : `https://vikassatpute.com/og?title=${post.metadata.title}`,
            url: `https://vikassatpute.com/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Vikas Satpute',
            },
          }),
        }}
      />
      <h1 className="title max-w-[650px] text-2xl font-medium tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
        <Suspense fallback={<p className="h-5" />}>
          <CustomMDX slug={post.slug} />
        </Suspense>
      </div>
      <article>
        <MDXContainer content={post.content} />
      </article>
    </Container>
  );
}

// let incrementViews = cache(increment);

// async function Views({ slug }: { slug: string }) {
//   let views = await getViewsCount();
//   incrementViews(slug);
//   return <ViewCounter allViews={views} slug={slug} />;
// }
