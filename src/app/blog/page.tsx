import Link from 'next/link';
import { Suspense } from 'react';
import ViewCounter from './view-counter';
import { getBlogPosts } from '@/lib/mdx';
import { CustomMDX } from '@/components/mdx/mdx';
import Container from '@/components/Container';
// import { getViewsCount } from 'app/db/queries';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <Container>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Read my thoughts</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="mb-4 flex flex-col space-y-1"
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full flex-col">
              <p className="tracking-tight text-neutral-900 dark:text-neutral-100">
                {post.metadata.title}
              </p>
              <Suspense fallback={<p className="h-6" />}>
                <CustomMDX slug={post.slug} />
              </Suspense>
            </div>
          </Link>
        ))}
    </Container>
  );
}

// async function Views({ slug }: { slug: string }) {
//   let views = await getViewsCount();

//   return <ViewCounter allViews={views} slug={slug} />;
// }
