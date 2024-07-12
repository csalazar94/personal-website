import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Camilo Salazar - Industrial Civil Engineer & Software Developer",
  description:
    "Welcome to my personal website! I specialize in web development, data analysis, project management, and machine learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-[#222436] font-sans antialiased",
          inter.variable,
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
