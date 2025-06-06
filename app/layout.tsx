import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";  // Only import what you need
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/react";
import { Toaster } from "sonner";

// Only initialize Geist Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  weight: "variable"
});

export const metadata: Metadata = {
  title: "Home Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistMono.variable}>  {/* Only use mono variable */}
      <body className="min-h-screen antialiased">
        <NuqsAdapter>{children}</NuqsAdapter>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}