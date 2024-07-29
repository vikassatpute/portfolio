import React, { Fragment } from 'react';
import { CssSlider, CssSliderItem } from './CssSlider';
import { techIcons } from '@/lib/techStackIcons';

function CssSliderContainer() {
  const len = techIcons.length;
  return (
    <div className="mt-20">
      <CssSlider width={68} height={68} quantity={len} padding="0 8px">
        {techIcons.map((icon, index) => {
          const path: string = icon.name;
          const grayscale = icon.grayscale;
          return (
            <Fragment key={index}>
              <CssSliderItem path={path} grayscale={grayscale} index={index} />
            </Fragment>
          );
        })}
      </CssSlider>
    </div>
  );
}

export default CssSliderContainer;
