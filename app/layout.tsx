import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AIAdvisorWidget from "@/components/ai-advisor/AIAdvisorWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emergent Advisor Hub - Build Applications with AI",
  description: "Transform your ideas into production-ready applications using AI. No code, no complexity—just describe what you want to build.",
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
