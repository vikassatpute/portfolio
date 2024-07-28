import { CustomMDX } from '@/components/mdx/mdx';
import { getPageContent } from '@/lib/mdx';
import React, { ReactNode } from 'react';

type CustomMDXContainerType = {
  content: string;
  children?: ReactNode;
};

async function MDXContainer({ content, children }: CustomMDXContainerType) {
  // const post = getPageContent().find((post) => post.slug === slug);
  // if (!post) return;

  return (
    <section className="prose-quoteless prose prose-neutral dark:prose-invert">
      <CustomMDX source={content} />
      {children && children}
    </section>
  );
}

export default MDXContainer;
