// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MyNavbar } from "@/components/Navbar";
import LenisProvider from "@/components/ui/LensProvider";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DocuMind AI",
  description: "Ask from PDFs in seconds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <MyNavbar />
          <LenisProvider>{children}</LenisProvider>
          <Footer />
          <ScrollToTop />
        </body>
      </html>
    </ClerkProvider>
  );
}
