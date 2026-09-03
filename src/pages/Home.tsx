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
import WebsiteAudit from "../components/WebsiteAudit";

export default function Home() {
  const location = useLocation();

  // If we arrived here as "/#contact" (e.g. clicked "Contact" while on
  // /projects), scroll to that section once the page has mounted.
  useEffect(() => {
    if (location.hash) {
      // Small delay ensures the section has actually rendered/laid out
      // before we try to scroll to it — matters especially right after
      // navigating from another route.
      const timeout = setTimeout(() => {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [location.pathname, location.hash, location.key]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WebsiteAudit />
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
