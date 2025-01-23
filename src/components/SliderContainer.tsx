import React, { Fragment, useEffect } from 'react';
import { Slider, SliderItem } from './Slider';
import { techIcons } from '@/lib/techStackIcons';
import { useMeasure } from '@uidotdev/usehooks';
import { animate, useMotionValue, motion } from 'framer-motion';

function SliderContainer() {
  const len = techIcons.length;
  return (
    <Slider width={68} height={68} quantity={len} padding="8px">
      {techIcons.map((icon, index) => {
        const path: string = icon.name;
        return (
          <div className="h-12 w-12" key={index}>
            <SliderItem path={path} index={index} />
          </div>
        );
      })}
    </Slider>
  );
}

export default SliderContainer;
