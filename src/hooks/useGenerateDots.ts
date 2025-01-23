import React, { useCallback, useState } from 'react';
interface Dot {
  x: number;
  y: number;
  size: number;
  color: string;
}
const arrayColors = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
function useGenerateDots() {
  const [dots, setDots] = useState<Dot[]>([]);

  const generateDots = useCallback((canvas: HTMLCanvasElement) => {
    const newDots: Dot[] = [];
    for (let index = 0; index < 50; index++) {
      newDots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.floor(Math.random() * 3 + 1),
        color: arrayColors[Math.floor(Math.random() * arrayColors.length)],
      });
    }
    setDots(newDots);
  }, []);

  return {
    dots,
    generateDots,
  };
}

export default useGenerateDots;
