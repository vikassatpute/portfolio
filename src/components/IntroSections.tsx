import Image from 'next/image';
import React from 'react';

function IntroSections() {
  return (
    <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 p-4">
      <div className="flex flex-col items-center gap-6">
        <div className="pic h-36 w-36 overflow-hidden rounded-full sm:h-60 sm:w-60">
          <Image
            className="grayscale"
            src="/vikas.jpeg"
            alt="vikas satpute"
            height={800}
            width={800}
          ></Image>
        </div>
        <div className="--font-patua-one flex w-max flex-col items-center gap-2">
          <h2 className="color-gradient left text-3xl font-bold lowercase sm:text-4xl">
            Welcome to my corner
          </h2>
          <h2 className="color-gradient right text-5xl font-bold uppercase sm:text-6xl">
            of the web!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default IntroSections;
