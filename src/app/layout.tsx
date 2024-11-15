
import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

import Header from "@/components/ui/Header";
//import Footer from "@/components/ui/Footer";
import AnimatedCursor from "react-animated-cursor"
import Animation from "@/components/ui/ParticleSystem";
import Footer1 from "@/components/ui/Footer1";
// import { initializeLenis } from "@/lib/utils";
// import { useEffect } from "react";


const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Regular.woff',
      style: 'normal',
    },
   
  ],
})
export const metadata: Metadata = {
  title: "Fade Media",
  description: "Fade Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className={satoshi.className}>
      
      <body  
      >
        <AnimatedCursor 
        innerSize={8}
        outerSize={8}
       
        outerAlpha={0}
        innerScale={0.01}
        outerScale={6}
        trailingSpeed={1}
        outerStyle={{
          backgroundColor: 'rgba(95, 207, 200, 0.5)',
          
        }}
        showSystemCursor={true}
        innerStyle={{
          backgroundColor: '#5fbccf'
        }}/>
        <Animation />
        <Header />
        {children}
        <Footer1 />
      </body>
    </html>
  );
}
