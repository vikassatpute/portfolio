import React from 'react';
import type { MDXComponents } from 'mdx/types';
import YouTube from '@/components/mdx/youtube';
import Code from '@/components/mdx/code';

// import Pre from "@/components/mdx/pre"; // Adjust the import path as needed
// import { Button } from "@/components/ui/button";
import InlineCode from '@/components/mdx/inline-code';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    YouTube,
    // pre: Pre, // Use the custom Pre component
    code: (props) => {
      const { className, children } = props;
      if (className) {
        return <Code {...props} />;
      }
      return <InlineCode>{children}</InlineCode>;
    },
    h1: (props) => <h1 className="pb-4 text-4xl font-black" {...props} />,
    h2: (props) => <h2 className="pb-4 text-3xl font-bold" {...props} />,
    h3: (props) => <h3 className="pb-4 text-2xl font-semibold" {...props} />,
    h4: (props) => <h4 className="pb-4 text-xl font-medium" {...props} />,
    h5: (props) => <h5 className="pb-4 text-lg font-normal" {...props} />,
    h6: (props) => <h6 className="pb-4 text-base font-light" {...props} />,
    p: (props) => <p className="mb-4 text-lg" {...props} />,
    li: (props) => <li className="pb-1" {...props} />,
    ul: (props) => <ul className="list-disc pb-4 pl-6" {...props} />,
    ol: (props) => <ol className="list-decimal pb-4 pl-6" {...props} />,
    hr: (props) => <hr className="my-4" {...props} />,
    blockquote: (props) => (
      <blockquote style={{ paddingBottom: 0 }} className="my-4 border-l-4 pl-4" {...props} />
    ),
    a: (props) => <a className="font-semibold hover:underline" {...props} />,
  };
}
