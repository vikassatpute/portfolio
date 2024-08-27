import localFont from 'next/font/local';

const LarkenFont = localFont({
  variable: '--font-larken',
  src: [
    {
      path: '../../public/fonts/larken-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/larken-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default LarkenFont;