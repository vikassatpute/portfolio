'use client';
import useGenerateDots from '@/hooks/useGenerateDots';
import React, { useRef, useEffect, useState, useCallback } from 'react';

const DotsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { dots, generateDots } = useGenerateDots();

  const drawDots = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      dots.forEach((dot) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    },
    [dots],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const banner = canvas.parentElement;
    if (!banner) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots(ctx);
      const mouse = {
        x: event.pageX - banner.getBoundingClientRect().left,
        y: event.pageY - banner.getBoundingClientRect().top,
      };
      dots.forEach((dot) => {
        const distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const handleMouseOut = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots(ctx);
    };

    banner.addEventListener('mousemove', handleMouseMove);
    banner.addEventListener('mouseout', handleMouseOut);

    return () => {
      banner.removeEventListener('mousemove', handleMouseMove);
      banner.removeEventListener('mouseout', handleMouseOut);
    };
  }, [drawDots, dots]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const banner = canvas.parentElement;
    if (!banner) return;
    const resizeCanvas = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
      generateDots(canvas);
    };

    if (canvas && !dots.length) {
      resizeCanvas();
    }

    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [generateDots, dots.length]);

  useEffect(() => {
    if (dots.length === 0) return;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawDots(ctx);
      }
    }
  }, [dots, dots.length, drawDots]);

  return <canvas ref={canvasRef} className="absolute left-0 top-0 z-20 h-full w-full" />;
};

export default DotsCanvas;
