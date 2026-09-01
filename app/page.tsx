import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialBand } from "@/components/SocialBand";
import { Stats } from "@/components/Stats";
import { Bio } from "@/components/Bio";
import { Gallery } from "@/components/Gallery";
import { Method } from "@/components/Method";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SocialBand />
      <main id="main-content">
        <Stats />
        <Bio />
        <Gallery />
        <Method />
        <BeforeAfter />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
