import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { themeScript } from "@/lib/theme";
import { site } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Headquarter — Media House & Creative Agency in Gangtok, Sikkim",
    template: "%s · Headquarter",
  },
  description: site.description,
  keywords: [
    "marketing agency Sikkim",
    "media house Gangtok",
    "social media agency Northeast India",
    "influencer marketing Northeast India",
    "event coverage Sikkim",
    "content production Gangtok",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "Headquarter — The ultimate marketing base camp",
    description: "Content. Marketing. Events. A media house from Gangtok, Sikkim.",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f0e6" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0d0b" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Sets the theme before first paint (no flash) and enables scroll-reveal styles only when JS runs */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grain min-h-full">{children}</body>
    </html>
  );
}
