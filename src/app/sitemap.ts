import { getBlogPosts, getPageContent, getProjectsContent } from "@/lib/mdx";


export default async function sitemap() {
  let pages = getPageContent().map((page) => ({
    url: `https://vikassatpute.com/${page.slug}`,
    lastModified: page.metadata.publishedAt,
  }));

  let projects = getProjectsContent().map((post) => ({
    url: `https://vikassatpute.com/projects/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let blogs = getBlogPosts().map((post) => ({
    url: `https://vikassatpute.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/home', '/blog', '/contact'].map((route) => ({
    url: `https://vikassatpute.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...pages, ...blogs, ...projects];
}
