import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Elsie } from 'next/font/google';
import Footer from "../components/Footer";
import Header from "@/components/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const elsie = Elsie({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-elsie',
});


export const metadata: Metadata = {
  metadataBase: new URL("https://nystatenews.org/"),
  title: "Nystate News – Trusted Breaking News in Politics, Business & Health",
  description: "Nystate News delivers breaking headlines and expert analysis across politics, business, health, sports, science, entertainment, and education.",
  keywords: "Puerto Rico political targeting, Brazil Supreme Court social media ruling,Wanda Vázquez Garced news, Section 230 alternatives, platform liability 2025, AI robotaxis Atlanta, Uber Waymo launch, Cooper Flagg NBA draft 2025, youth smartphone addiction, mailed HPV kits, cervical cancer screening at home, DOJ corruption investigations, Puerto Rico legal system updates",

  openGraph: {
    title: "Nystate News – Coverage That Matters: Politics, Business, Health & Beyond",
    description: "Stay updated with Nystate News – your reliable source for breaking headlines and expert analysis in politics, business, health, science, sports, entertainment, and education.",
    url: "https://nystatenews.org/",
    siteName: " Nystate News",
    images: [
      {
        url: "https://nystatenews.org/images/nystatenews-card.webp",
        width: 1200,
        height: 630,
        alt: " Nystate News logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Breaking News in Politics, Business, Health & More – Nystate News",
    description:
      "Follow Nystate News for trusted reporting and real-time updates on politics, business, health, science, education, and entertainment.",
    images: ["https://nystatenews.org/images/nystatenews-card.webp"],
    site: "@nystatenews",
    creator: "@nystatenews",
  },

  alternates: {
    canonical: "https://nystatenews.org/",
    languages: {
      en: "https://nystatenews.org/",
      "x-default": "https://nystatenews.org/",
    },
  },

  authors: [{ name: "Published by the NY State News Staff" }],
  icons: {
    icon: "/favicon.ico",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${elsie.variable}`} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
