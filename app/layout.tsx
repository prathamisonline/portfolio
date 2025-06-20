import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pratham - Frontend Engineer",
  description: "Senior Frontend Engineer passionate about building beautiful, accessible, and performant web experiences.",
  keywords: ["frontend developer", "react", "next.js", "typescript", "portfolio"],
  authors: [{ name: 'Pratham' }],
  creator: 'Pratham',
  publisher: 'Pratham',
  metadataBase: new URL('https://yourdomain.com'), // Replace with your actual domain
  openGraph: {
    title: 'Pratham - Frontend Engineer',
    description: 'Senior Frontend Engineer passionate about building beautiful, accessible, and performant web experiences.',
    url: 'https://yourdomain.com',
    siteName: 'Pratham Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratham - Frontend Engineer',
    description: 'Senior Frontend Engineer passionate about building beautiful, accessible, and performant web experiences.',
    creator: '@yourtwitter', // Replace with your Twitter handle
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased bg-gray-900 text-gray-100">
        {children}
      </body>
    </html>
  );
}
