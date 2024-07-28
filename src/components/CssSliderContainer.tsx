import React, { Fragment } from 'react';
import { CssSlider, CssSliderItem } from './CssSlider';
import { techIcons } from '@/lib/techStackIcons';

function CssSliderContainer() {
  const len = techIcons.length;
  console.log({ techIcons });
  console.log({ len });
  // return <></>;
  return (
    <CssSlider width={32} height={32} quantity={len}>
      {techIcons.map((icon, index) => {
        const path: string = icon.name;
        const grayscale = icon.grayscale;
        return (
          <Fragment key={index}>
            <CssSliderItem
              path={path}
              grayscale={grayscale}
              index={index}
              height={0}
              width={0}
              quantity={0}
            />
          </Fragment>
        );
      })}
    </CssSlider>
  );
}

export default CssSliderContainer;
