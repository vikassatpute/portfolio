import { Metadata } from 'next';

import Timeline from '@/components/timeline';
import SkillsSnapshot from '@/components/skills-snapshot';
import FeaturedProjects from '@/components/featured-projects';
import { timeline, skills, featuredProjects } from '@/data/story-data';

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  console.log({ params });
  const title = 'Story: Vikas Satpute';
  const description = 'Web/Frontend developer';
  let ogImage = `https://vikassatpute.com/og?title=${title}`;
  console.log({ ogImage });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://vikassatpute.com/`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function StoryPage() {
  <main className="container mx-auto max-w-5xl space-y-20 px-4 py-16">
    {/* ‣ intro / hero sections here … */}

    <Timeline items={timeline} />
    <SkillsSnapshot data={skills} />
    <FeaturedProjects projects={featuredProjects} />

    {/* ‣ any other specialised sections … */}
  </main>;
}
