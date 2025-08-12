import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mr Frimpong – Full Stack Engineer",
  description:
    "Senior Frontend Engineer specializing in Next.js, React, and delightful UI/UX.",
  openGraph: {
    title: "Mr Frimpong – Full Stack Engineer",
    description:
      "Senior Frontend Engineer specializing in Next.js, React, and delightful UI/UX.",
    url: "https://mrfrimpong.com",
    siteName: "Mr Frimpong",
    images: [
      {
        url: "https://mrfrimpong.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mr Frimpong – Full Stack Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr Frimpong – Full Stack Engineer",
    description:
      "Senior Frontend Engineer specializing in Next.js, React, and delightful UI/UX.",
    images: ["https://mrfrimpong.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  themeColor: "#ffffff",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
