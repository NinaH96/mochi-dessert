import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
