// src/Shimmer.js
import React from 'react';
import style from '@/styles/shimmer.module.css';

const Shimmer = () => {
  return (
    <div className={`${style.shimmer_wrapper} space-y-3`}>
      <div className={`${style.shimmer} h-3 rounded-sm`}></div>
      <div className={`${style.shimmer} h-3 rounded-sm`}></div>
      <div className={`${style.shimmer} h-3 rounded-sm`}></div>
      <div className={`${style.shimmer} h-3 rounded-sm`}></div>
      <div className={`${style.shimmer} h-3 rounded-sm`}></div>
    </div>
  );
};

export default Shimmer;
