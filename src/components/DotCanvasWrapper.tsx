'use client';
import { useIsTouchDevice } from '@/hooks/useIsTouchDevice';
import React from 'react';
import DotsCanvas from './DotsCanvas';

function DotCanvasWrapper() {
  const isTouchDevice = useIsTouchDevice();
  // return <>{!isTouchDevice && <DotsCanvas />}</>;
  return <DotsCanvas />;
}

export default DotCanvasWrapper;
