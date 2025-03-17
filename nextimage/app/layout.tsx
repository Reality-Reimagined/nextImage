import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from "@/components/providers";
import { Navigation } from "@/components/Navigation";
import { Toaster } from "sonner";

const openSans = Open_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Gemini Studio - AI Image Creation & Editing",
  description: "Create and edit images using Google DeepMind Gemini 2.0",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.className} antialiased bg-background min-h-screen`}
        suppressHydrationWarning
      >
        <ThemeProviders>
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
          <Toaster position="bottom-right" />
        </ThemeProviders>
      </body>
    </html>
  );
}