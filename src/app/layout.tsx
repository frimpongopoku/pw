import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const productSans = localFont({
  src: [
    {
      path: "../font/ProductSans-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../font/ProductSans-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../font/ProductSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/ProductSans-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../font/ProductSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/ProductSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../font/ProductSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/ProductSans-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../font/ProductSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../font/ProductSans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../font/ProductSans-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../font/ProductSans-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--product-sans",
  display: "swap",
});

export const metadata = {
  title: "Mr Frimpong – Full Stack Engineer",
  description:
    "AI-Enabled Full Stack Engineer specializing in NestJs, Next.js, React and delightful UI/UX.",
  openGraph: {
    title: "Mr Frimpong – Full Stack Engineer",
    description:
      "AI-Enabled Full Stack Engineer specializing in NestJs, Next.js, React, and delightful UI/UX.",
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
      "Full Stack Engineer specializing in Next.js, React, and delightful UI/UX.",
    images: ["https://mrfrimpong.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-accent="orange-rose" lang="en">
      <body className={`${productSans.variable}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
