import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, Montserrat } from "next/font/google";
import { Providers } from "@/components/Providers";
import { CustomCursor } from "@/components/CustomCursor";
import { CopyProtection } from "@/components/CopyProtection";
import { FloatingCTA } from "@/components/FloatingCTA";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Purnova | Built To Be Remembered",
  description: "Premium digital marketing for brands that refuse to be ordinary. We specialize in aggressive growth strategies for luxury and enterprise markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${cinzel.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-background)] text-[var(--color-on-surface)] selection:bg-[var(--color-primary-container)] selection:text-[var(--color-on-primary-container)] overflow-x-hidden md:cursor-none">
        <CustomCursor />
        <CopyProtection />
        <Providers>{children}</Providers>
        <FloatingCTA />
      </body>
    </html>
  );
}
