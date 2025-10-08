import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const bitcount = localFont({
  src: "/fonts/fugazOne.ttf",
  variable: "--font-fugaz",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bitcount.className} cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
