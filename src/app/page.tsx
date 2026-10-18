import { Animations } from "@/components/Animations";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Creators } from "@/components/sections/Creators";
import { Feed } from "@/components/sections/Feed";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: `+${site.phoneRaw}`,
  areaServed: "Northeast India",
  address: { "@type": "PostalAddress", addressLocality: "Gangtok", addressRegion: "Sikkim", addressCountry: "IN" },
  sameAs: [site.instagram],
};

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-hq focus:px-4 focus:py-2 focus:text-night"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Feed />
        <Creators />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <SmoothScroll />
      <Animations />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
