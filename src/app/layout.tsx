import type { Metadata } from "next";
import "./globals.css";
import { iransans } from '@/assets/fonts/fonts'

export const metadata: Metadata = {
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const font = `${iransans.className} `
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${font}`}
      >
        {children}
      </body>
    </html>
  );
}
