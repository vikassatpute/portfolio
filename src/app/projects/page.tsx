import Container from '@/components/Container';
import SliderContainer from '@/components/SliderContainer';
import useGetHeaders from '@/hooks/useGetHeaders';
import MDXContainer from '@/layout/MDXContainer';
import { getPageContent } from '@/lib/mdx';
export const metadata = {
  title: 'Projects',
  description: 'Read my projects on software development, design, and more.',
};
export default async function ProjectsPage() {
  const { pathname } = useGetHeaders();
  const post = getPageContent().find((post) => post.slug === pathname);
  if (!post) return;

  return (
    <Container>
      <MDXContainer content={post.content}>
        <SliderContainer />
      </MDXContainer>
    </Container>
  );
}
