import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Services from "../components/Services";
import FeaturedProjects from "../components/FeaturedProjects";
import Process from "../components/Process";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { scrollToSection } from "../utils/scrollTo";

export default function Home() {
  const location = useLocation();

  // If we arrived here as "/#contact" (e.g. clicked "Contact" while on
  // /projects), scroll to that section once the page has mounted.
  useEffect(() => {
    if (location.hash) {
      const timeout = setTimeout(() => scrollToSection(location.hash), 100);
      return () => clearTimeout(timeout);
    }
  }, [location.hash]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <FeaturedProjects />
        <Process />
        {/* <Testimonials /> */}
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
