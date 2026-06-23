import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a2e",
};

export const metadata: Metadata = {
  title: "Award Prospect — Global Sourcing & Cross-Border Supply Chain",
  description:
    "Award Prospect Limited is a Hong Kong-based cross-border procurement and supply chain company. We source authentic goods from worldwide department stores, duty-free shops, and authorized distributors, then distribute to platforms and buyers across Asia, the Middle East, and beyond.",
  keywords: [
    "cross-border procurement",
    "global sourcing",
    "supply chain",
    "Hong Kong",
    "wholesale distribution",
    "brand sourcing",
    "bonded warehouse",
    "Asia distribution",
  ],
  icons: {
    icon: [
      { url: "/favicon-new.ico", sizes: "16x16 32x32 48x48" },
      { url: "/favicon-256.png", sizes: "256x256", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
