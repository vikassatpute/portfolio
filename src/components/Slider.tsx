'use client';

import React, { createContext, CSSProperties, ReactNode, useContext } from 'react';
import StackIcon from 'tech-stack-icons';
import styles from '@/styles/ticker.module.css';

interface SliderContextType {
  height: number;
  width: number;
  quantity: number;
  padding: string;
}
interface SliderProps extends SliderContextType {
  children: ReactNode;
}
interface SliderItemProps {
  path: string;
  index: number;

  children?: ReactNode;
}
const SliderContext = createContext<SliderContextType | null>(null);
// Create a custom hook to access the context
const useSlider = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error('context not available');
  }
  return context;
};

const Slider: React.FC<SliderProps> = ({ width, height, quantity, padding, children }) => {
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
    <SliderContext.Provider value={contextValues}>
      <div className={styles.slider} style={cssVariables}>
        <div className={styles.list}>{children}</div>
      </div>
    </SliderContext.Provider>
  );
};

const SliderItem: React.FC<SliderItemProps> = ({ path, index }) => {
  const cssVariables = {
    '--position': index + 1,
  } as CSSProperties;
  return (
    <div className={styles.item} style={cssVariables}>
      <StackIcon name={path} />
    </div>
  );
};

export { Slider, SliderItem };
