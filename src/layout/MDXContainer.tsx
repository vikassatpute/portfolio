import { CustomMDX } from '@/components/mdx/mdx';
import { getPageContent } from '@/lib/mdx';
import React, { ReactNode, Suspense } from 'react';
import Shimmer from '@/components/Shimmer';
import Container from '@/components/Container';

type CustomMDXContainerType = {
  content: string;
  children?: ReactNode;
};

async function MDXContainer({ content, children }: CustomMDXContainerType) {
  return (
    <div className="prose-quoteless prose prose-neutral dark:prose-invert">
      <CustomMDX source={content} />
      {children && children}
    </div>
  );
}

export default MDXContainer;
