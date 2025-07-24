import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Elsie } from 'next/font/google';
import Header from "../components/Header";
import Footer from "../components/Footer";

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

  title: " Nystate News – Breaking Political News, Supreme Court Rulings & Tech Insight",

  description: " Nystate News brings you breaking updates on Wanda Vázquez Garced’s case, Brazil's Supreme Court rulings on social media, robotaxis by Uber/Waymo, Cooper Flagg NBA draft buzz, and youth mental health trends. Trusted analysis in politics, tech, health, and law.",

  keywords:
    "Puerto Rico political targeting, Brazil Supreme Court social media ruling,Wanda Vázquez Garced news, Section 230 alternatives, platform liability 2025, AI robotaxis Atlanta, Uber Waymo launch, Cooper Flagg NBA draft 2025, youth smartphone addiction, mailed HPV kits, cervical cancer screening at home, DOJ corruption investigations, Puerto Rico legal system updates",

  openGraph: {
    title: " Nystate News – Breaking News in Politics, Law, Tech & Health",
    description: "Get in-depth coverage on political prosecutions, tech accountability laws, self-driving cars, youth mental health, and more. Follow the latest developments on Wanda Vázquez, AI robotaxis, and Supreme Court rulings — all in one trusted source.",
    url: "https://nystatenews.org/",
    siteName: " Nystate News",
    images: [
      {
        url: "https://nystatenews.org/images/nystatenews-logo.webp",
        width: 1200,
        height: 630,
        alt: " Nystate News logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: " Nystate News – Political Targeting, Supreme Court Rulings & Tech Trends",
    description: "Breaking analysis on Wanda Vázquez, Brazil's top court vs Big Tech, AI robotaxis, youth mental health, and cancer screening at home.",
    images: ["https://nystatenews.org/images/nystatenews-logo.webp"],
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

  authors: [{ name: "Cameron Ellis" }],
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
