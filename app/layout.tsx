import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Just Fucking Use PXXL",
  description:
    "A no-bullshit guide to why you should stop hand-rolling your infrastructure and use a modern deployment platform like PXXL (or Vercel, Render, Railway).",
  keywords: [
    "PXXL",
    "deployment",
    "platform",
    "infrastructure",
    "serverless",
    "DevOps",
  ],
  authors: [{ name: "trovhq" }],
  openGraph: {
    title: "Just Fucking Use PXXL",
    description:
      "Stop configuring nginx at midnight. Just fucking use PXXL.",
    url: "https://justfuckingusepxxl.com",
    siteName: "Just Fucking Use PXXL",
    type: "website",
    locale: "en_US",
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>" />
      </head>
      <body className="bg-gradient-to-br from-pxxl-dark via-pxxl-darker to-pxxl-dark">
        {children}
      </body>
    </html>
  );
}
