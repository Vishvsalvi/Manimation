import type { Metadata } from "next";
import { Geist, Philosopher } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const philosopher = Philosopher({
  variable: "--font-philosopher",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Manimation | Learn with Animation",
  description: "Manimation is a math animation tool that allows you to create beautiful and informative mathematical animations that enhance understanding through visual learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${philosopher.variable} font-sans antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
