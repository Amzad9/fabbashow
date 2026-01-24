import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The fABBA Show - Experience ABBA Like Never Before",
  description:
    "Step into a time machine and witness ABBA live in their prime with The fABBA Show, the sensational stage production that's taking audiences by storm all across the United States!",
  keywords: [
    "ABBA tribute",
    "ABBA show",
    "The fABBA Show",
    "live ABBA",
    "concert",
    "tribute band",
    "United States",
  ],
  openGraph: {
    title: "The fABBA Show - Experience ABBA Like Never Before",
    description:
      "Step into a time machine and witness ABBA live in their prime with The fABBA Show, the sensational stage production that's taking audiences by storm all across the United States!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The fABBA Show - Experience ABBA Like Never Before",
    description:
      "Step into a time machine and witness ABBA live in their prime with The fABBA Show.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
