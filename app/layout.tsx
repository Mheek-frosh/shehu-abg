import type { Metadata } from "next";
import { Instrument_Sans, Oswald } from "next/font/google";
import { PhotoProvider } from "@/components/Photo";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/content";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: `${site.fullName} · ${site.tagline}`,
  description: site.description,
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NG"
      className={`${oswald.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-paper">
        <PhotoProvider>
          <SiteHeader />
          <main id="main" className="pt-[60px]">
            {children}
          </main>
          <SiteFooter />
        </PhotoProvider>
      </body>
    </html>
  );
}
