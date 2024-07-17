import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "./providers/ConvexClerkProvider";
import { Toaster } from "@/components/us/toaster";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caster - AI Podcasts",
  description: "Generate podcasts using AI",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
