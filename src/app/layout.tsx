import "./globals.css";

import FooterComponent from "../components/footer/footer";
import HeaderComponent from "../components/header/header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import React from "react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GC pub",
  description: "Generated by next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://publications.gc.ca/boew-wet/wet4.0ca/wet-boew/js/wet-boew.min.js"
          strategy="afterInteractive"
        />
        {/* <Script src="/js/wet-boew.min.js" /> */}
        {/* <Script src="/js/header.js" /> */}
        <Script src="/js/theme.min.js" strategy="afterInteractive" />
        {/* <Script src="/js/gc-thematique.min.js" /> */}
      </head>
      <body className={inter.className}>
        <HeaderComponent></HeaderComponent>
        <main role="main" property="mainContentOfPage" className="container">
          {children}
        </main>
        <FooterComponent></FooterComponent>
      </body>
    </html>
  );
}
