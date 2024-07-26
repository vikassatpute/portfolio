import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';
function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}
function createHeading(level) {
  return function Heading({ children }) {
    let slug = slugify(children);
    return React.createElement(`h${level}`, { id: slug }, [
      React.createElement(
        'a',
        {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'block no-underline hover:underline',
        },
        [children],
      ),
    ]);
  };
}
function PageTitle() {
  return function Title({ children }) {
    return React.createElement(
      `h1`,
      {},
      React.createElement(
        'span',
        {
          key: `title`,
          className: 'color-gradient',
        },
        [children],
      ),
    );
  };
}
let components = {
  h1: PageTitle(),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
};
export function CustomMDX(props) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />;
}
