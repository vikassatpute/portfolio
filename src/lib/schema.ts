import { getBlogPosts, getProjectsContent } from './mdx';

type WebsiteSchema = {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  sameAs?: string[];
  author: {
    '@type': string;
    name: string;
    url: string;
  };
};

type BlogPostSchema = {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: {
    '@type': string;
    name: string;
    url: string;
  };
  image?: string;
  url: string;
};

type ProjectSchema = {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  datePublished: string;
  url: string;
  author: {
    '@type': string;
    name: string;
    url: string;
  };
};

export function generateWebsiteSchema(): WebsiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vikas Satpute',
    description: 'Personal portfolio and blog of Vikas Satpute, a Web & Frontend Developer with over 13 years of experience.',
    url: 'https://vikassatpute.com',
    sameAs: [
      // Add your social media profiles here
      'https://github.com/yourusername',
      'https://linkedin.com/in/yourusername',
    ],
    author: {
      '@type': 'Person',
      name: 'Vikas Satpute',
      url: 'https://vikassatpute.com',
    },
  };
}

export function generateBlogPostSchema(slug: string): BlogPostSchema | null {
  const post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) return null;

  const { title, publishedAt, summary, image } = post.metadata;
  const ogImage = image
    ? `https://vikassatpute.com${image}`
    : `https://vikassatpute.com/og?title=${title}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: summary,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      '@type': 'Person',
      name: 'Vikas Satpute',
      url: 'https://vikassatpute.com',
    },
    image: ogImage,
    url: `https://vikassatpute.com/blog/${slug}`,
  };
}

export function generateProjectSchema(slug: string): ProjectSchema | null {
  const project = getProjectsContent().find((project) => project.slug === slug);
  if (!project) return null;

  const { title, publishedAt, summary } = project.metadata;

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description: summary,
    datePublished: publishedAt,
    url: `https://vikassatpute.com/projects/${slug}`,
    author: {
      '@type': 'Person',
      name: 'Vikas Satpute',
      url: 'https://vikassatpute.com',
    },
  };
}