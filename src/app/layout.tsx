import type { Metadata } from "next";
import { Viga } from "next/font/google";
import "./globals.css";

const viga = Viga({
  variable: "--font-viga",
  subsets: ["latin"],
  weight: ["400"],
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
