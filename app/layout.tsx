import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AIAdvisorWidget from "@/components/ai-advisor/AIAdvisorWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Build.App - Create Applications with AI",
  description: "Build applications with AI - no coding required. Clone any app with AI-powered generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <AIAdvisorWidget />
      </body>
    </html>
  );
}
