'use client';

import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion';
import DotCanvasWrapper from './DotCanvasWrapper';
import { Logo } from '@/components/Icons';
import SliderContainer from './SliderContainer';

const COLORS_TOP = ['19, 255, 170', '30, 103, 198', '206, 132, 207', '221, 51, 9'];

export const LandingHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(
    circle,
    rgba(${color},1) 0%,
    rgba(${color},0.5) 50%,
    rgba(0, 0, 0, 0.7) 100%
  )`;
  // const border = useMotionTemplate`1px solid ${color}`;
  // const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid h-dvh place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="pointer-events-none relative z-30 flex flex-col items-center">
        <div className="mb-6">
          <Logo className="h-12 w-12 -rotate-90 fill-white" />
        </div>
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Web & Frontend Developer
        </span>
        <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Vikas Satpute
        </h1>
        <p className="my-4 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Crafting Seamless Web Experiences with Over 13 Years of Expertise in Design, Code, and
          Innovation.
        </p>
      </div>

      <div className="ticker-wrapper relative z-10 mx-auto mt-5 max-w-2xl">
        <SliderContainer />
      </div>

      <div className="absolute inset-0 z-20">
        <DotCanvasWrapper />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
