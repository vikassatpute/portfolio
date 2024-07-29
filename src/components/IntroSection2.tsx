'use client';

import Image from 'next/image';
import React from 'react';

function IntroSection2() {
  return (
    <>
      <div className="relative mx-auto h-dvh max-w-[960px]">
        <div className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 sm:block">
          <h2 className="text-4xl font-bold">Vikas Satpute</h2>
          <p className="text-sm font-light">Web developer</p>
        </div>
        <div className="absolute right-20 top-64 z-20 hidden sm:block">
          <p className="text-lg font-bold">13 years experience</p>
        </div>
      </div>
      <div className="profile-pic-wrapper fixed bottom-0 left-1/2 z-20 w-[700px] -translate-x-1/2">
        <div className="absolute bottom-0 h-[350px] w-full rounded-t-full bg-amber-500"></div>
        <Image
          className="absolute bottom-1 left-1/2 z-10 -translate-x-1/2"
          src={'/vikas-removebg.png'}
          alt="Vikas Satpute"
          width={600}
          height={600}
        />
      </div>
    </>
  );
}

export default IntroSection2;
