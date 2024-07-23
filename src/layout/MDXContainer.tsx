import { CustomMDX } from '@/components/mdx/mdx';
import { getBlogPosts } from '@/lib/mdx';
import React from 'react';

async function MDXContainer({
  slug,
}: Readonly<{
  slug: String;
}>) {
  const post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) return;

  return (
    <section className="prose mx-auto pb-32 pt-20 dark:prose-invert">
      <CustomMDX source={post.content} />
    </section>
  );
}

export default MDXContainer;
