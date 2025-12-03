import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hanzala Qureshi - Senior Data & AI Professional",
  description: "Product builder, data and AI professional, and expat in Saudi Arabia. Building AI-powered tools and sharing insights on technology and life in Riyadh.",
  keywords: ["Data", "AI", "Machine Learning", "Saudi Arabia", "Product Development", "Inboxie"],
  authors: [{ name: "Hanzala Qureshi" }],
  openGraph: {
    title: "Hanzala Qureshi - Senior Data & AI Professional",
    description: "Product builder, data and AI professional, and expat in Saudi Arabia.",
    type: "website",
  },
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
        <Navigation />
        {children}
      </body>
    </html>
  );
}
