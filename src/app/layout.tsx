import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const isMobile = !!process.env.NEXT_PUBLIC_API_BASE;

export const metadata: Metadata = {
  title: "FOOD OR TRASH",
  description:
    "AIs and dieticians are trained on biased information. Get a real answer about whether something is food or trash.",
  metadataBase: new URL("https://foodortrash.com"),
  other: {
    viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  },
  icons: {
    icon: "/branding/favicon.ico",
  },
  openGraph: {
    title: "FOOD OR TRASH",
    description:
      "Whole foods are food. Seed oils are trash. Get a real answer.",
    url: "https://foodortrash.com",
    siteName: "FOOD OR TRASH",
    type: "website",
    images: [
      {
        url: "/api/og?item=everything&verdict=food&score=100",
        width: 1200,
        height: 630,
        alt: "FOOD OR TRASH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FOOD OR TRASH",
    description:
      "Whole foods are food. Seed oils are trash. Get a real answer.",
    images: ["/api/og?item=everything&verdict=food&score=100"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {!isMobile && (
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9703427126849282"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
