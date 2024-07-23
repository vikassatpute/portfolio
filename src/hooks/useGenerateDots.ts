import React, { useCallback, useState } from 'react';
interface Dot {
  x: number;
  y: number;
  size: number;
  color: string;
}
const arrayColors = ['#eee', '#545454', '#596d91', '#bb5a68', '#696541'];
function useGenerateDots() {
  const [dots, setDots] = useState<Dot[]>([]);

  const generateDots = useCallback((canvas: HTMLCanvasElement) => {
    const newDots: Dot[] = [];
    for (let index = 0; index < 50; index++) {
      newDots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.floor(Math.random() * 3 + 5),
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
