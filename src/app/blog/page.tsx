import Link from 'next/link';
import { Suspense } from 'react';
import { getBlogPosts } from '@/lib/mdx';
import { CustomMDX } from '@/components/mdx/mdx';
import Container from '@/components/Container';
import Shimmer from '@/components/Shimmer';
// import { getViewsCount } from 'app/db/queries';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <Container>
      {/* <Shimmer /> */}
      <Suspense fallback={<Shimmer />}>
        <div className="prose prose-invert">
          <h1>
            <span className="color-gradient">my thoughts</span>
          </h1>
          <div className="">
            <ul>
              {allBlogs
                .sort((a, b) => {
                  if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                    return -1;
                  }
                  return 1;
                })
                .map((post) => (
                  <li key={post.metadata.title}>
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                      <p className="tracking-tight text-neutral-900 dark:text-neutral-100">
                        {post.metadata.title}
                      </p>
                      <Suspense fallback={<p className="h-6" />}>
                        <CustomMDX slug={post.slug} />
                      </Suspense>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Suspense>
    </Container>
  );
}

// async function Views({ slug }: { slug: string }) {
//   let views = await getViewsCount();

//   return <ViewCounter allViews={views} slug={slug} />;
// }
