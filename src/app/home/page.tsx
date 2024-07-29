import DotCanvasWrapper from '@/components/DotCanvasWrapper';
import IntroSections from '@/components/IntroSections';
import IntroSection2 from '@/components/IntroSection2';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <DotCanvasWrapper />
      {/* <IntroSections /> */}
      <IntroSection2 />
    </>
  );
}
