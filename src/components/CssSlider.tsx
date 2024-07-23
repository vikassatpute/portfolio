'use client';
import Image from 'next/image';
import React, { createContext, CSSProperties, ReactNode, useContext } from 'react';

interface CssSliderContextType {
  height: number;
  width: number;
  quantity: number;
}
interface SliderProps extends CssSliderContextType {
  children: ReactNode;
}
interface SliderItemProps extends CssSliderContextType {
  path: string;
  index: number;
}
const CssSliderContext = createContext<CssSliderContextType | null>(null);
// Create a custom hook to access the context
const useCssSlider = () => {
  const context = useContext(CssSliderContext);
  if (!context) {
    throw new Error('context not available');
  }
  return context;
};

const CssSlider: React.FC<SliderProps> = ({ height, width, quantity, children }) => {
  const cssVariables = {
    '--width': `${width}px`,
    '--height': `${height}px`,
    '--quantity': quantity,
  } as CSSProperties;

  const contextValues = {
    width: width,
    height: height,
    quantity: quantity,
  };

  return (
    <CssSliderContext.Provider value={contextValues}>
      <div className="css_slider" style={cssVariables}>
        <div className="css_slider--list">{children}</div>
      </div>
    </CssSliderContext.Provider>
  );
};

const CssSliderItem: React.FC<SliderItemProps> = ({ path, index }) => {
  const cssVariables = {
    '--position': index + 1,
  } as CSSProperties;

  const { width, height } = useCssSlider();
  return (
    <div className="css_slider--item" style={cssVariables}>
      <Image src={path} alt="html5" height={height} width={width}></Image>
    </div>
  );
};

export { CssSlider, CssSliderItem };
