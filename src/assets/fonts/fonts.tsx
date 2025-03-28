import localFont from 'next/font/local'

const iransans = localFont({
  src: [
    {
      path: './iransans/IRANSansWeb_FaNum_UltraLight.ttf',
      weight: "200",
      style: "normal",
    },
    {
      path: './iransans/IRANSansWeb_FaNum_Light.ttf',
      weight: "300",
      style: "normal",
    },
    {
      path: './iransans/IRANSansWeb_FaNum.ttf',
      weight: "400",
      style: "normal",
    },
    {
      path: './iransans/IRANSansWeb_FaNum_Medium.ttf',
      weight: "500",
      style: "normal",
    },
    {
      path: './iransans/IRANSansWeb_FaNum_Bold.ttf',
      weight: "700",
      style: "normal",
    },
    {
      path: './iransans/IRANSansWeb_FaNum_Black.ttf',
      weight: "800",
      style: "normal",
    },
  ],
  preload: true,
  variable: '--font-iransans'
});



export { iransans }