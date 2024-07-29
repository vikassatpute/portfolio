'use client';
import Image from 'next/image';
import React, { createContext, CSSProperties, ReactNode, useContext } from 'react';
import StackIcon from 'tech-stack-icons';

interface CssSliderContextType {
  height: number;
  width: number;
  quantity: number;
  padding: string;
}
interface SliderProps extends CssSliderContextType {
  children: ReactNode;
}
interface SliderItemProps {
  path: string;
  index: number;
  grayscale?: boolean;
  children?: ReactNode;
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

const CssSlider: React.FC<SliderProps> = ({ height, width, quantity, padding, children }) => {
  const cssVariables = {
    '--width': `${width}px`,
    '--height': `${height}px`,
    '--quantity': quantity,
    '--padding': padding,
  } as CSSProperties;

  const contextValues = {
    width: width,
    height: height,
    quantity: quantity,
    padding: padding,
  };

  return (
    <CssSliderContext.Provider value={contextValues}>
      <div className="css_slider" style={cssVariables}>
        <div className="css_slider--list">{children}</div>
      </div>
    </CssSliderContext.Provider>
  );
};

const CssSliderItem: React.FC<SliderItemProps> = ({ path, index, grayscale }) => {
  const cssVariables = {
    '--position': index + 1,
  } as CSSProperties;

  // const { width, height } = useCssSlider();
  return (
    <div className="css_slider--item" style={cssVariables}>
      <StackIcon name={path} />
    </div>
  );
};

export { CssSlider, CssSliderItem };
