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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.fullName} · ${site.tagline}`,
  description: site.description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/media/photos/portrait.jpeg",
        alt: "Hon. Usman Shehu Bawa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    images: ["/media/photos/portrait.jpeg"],
  },
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
