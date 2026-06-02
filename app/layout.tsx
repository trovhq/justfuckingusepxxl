import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Just Fucking Use PXXL",
  description:
    "A no-bullshit guide to why you should stop hand-rolling your infrastructure and use a modern deployment platform like PXXL.",
  keywords: ["PXXL", "deployment", "platform", "infrastructure", "serverless", "DevOps"],
  authors: [{ name: "trovhq" }],
  openGraph: {
    title: "Just Fucking Use PXXL",
    description: "Stop configuring nginx at midnight. Just fucking use PXXL.",
    url: "https://justfuckingusepxxl.com",
    siteName: "Just Fucking Use PXXL",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
