import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Rangrove Media | Modern Web Development for Growing Brands",
  description:
    "Rangrove Media builds modern, high-performance websites and digital experiences for ambitious businesses.",
  icons: {
    icon: [
      {
        url: "/Brand/Favicon%20Dark%20Theme.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
      },
      {
        url: "/Brand/Favicon%20White%20Theme.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${caveat.variable}`}>{children}</body>
    </html>
  );
}
