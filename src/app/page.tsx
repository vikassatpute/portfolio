import DotCanvasWrapper from '@/components/DotCanvasWrapper';
import IntroSection2 from '@/components/IntroSection2';
import { redirect } from 'next/navigation';

export default function Home() {
  // redirect(`/home`);
  return (
    <>
      <DotCanvasWrapper />
      {/* <IntroSections /> */}
      <IntroSection2 />
    </>
  );
}
