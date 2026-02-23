import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FOOD OR TRASH",
  description:
    "AIs and dieticians are trained on biased information. Get a real answer about whether something is food or trash.",
  metadataBase: new URL("https://foodortrash.com"),
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
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
