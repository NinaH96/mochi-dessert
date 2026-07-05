import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCakes from "@/components/FeaturedCakes";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedCakes />
      <About />
      <Gallery />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
