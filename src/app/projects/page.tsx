import useGetHeaders from '@/hooks/useGetHeaders';
import MDXContainer from '@/layout/MDXContainer';
export const metadata = {
  title: 'Projects',
  description: 'Read my projects on software development, design, and more.',
};
export default async function ProjectsPage() {
  const { pathname } = useGetHeaders();

  return <MDXContainer slug={`${pathname}`} />;
}
