import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Viga, Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const viga = Viga({
  variable: "--font-viga",
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joseph's Portfolio",
  description: "Just Chill Programmer's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${viga.variable} antialiased`}>{children}</body>
    </html>
  );
}
