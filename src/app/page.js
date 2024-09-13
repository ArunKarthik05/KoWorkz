'use client'
import styles from "../../styles/modules/page.module.scss";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/Hero";
import Locations from "@/components/sections/Locations";
import Services from "@/components/sections/Services";
import Solutions from "@/components/sections/Solutions";
import { navItems } from "@/data/navItems";
import { useRef } from "react";

export default function Home() {
  const servicesRef = useRef(null);
  const locationsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    services: servicesRef,
    locations: locationsRef,
    testimonials: testimonialsRef,
    contact: contactRef,
  };

  return (
    <main className={styles.main}>
      <Navbar navItems={navItems} refs={refs} /> {/* Pass refs to Navbar */}
      <main>
        <section className={styles.hero}>
          <HeroSection refs={refs}/>
        </section>
        <Slider />

        <section ref={servicesRef}>
          <Services />
        </section>

        <section ref={locationsRef}>
          <Locations />
        </section>

        <section>
          <Solutions />
        </section>

        <section ref={contactRef}>
          <Contact />
        </section>

        <section ref={testimonialsRef}>
          <Testimonials padding={true}/>
        </section>
        <Slider />
      </main>

      <footer>
        <Footer navItems={navItems} refs={refs}/>
      </footer>
    </main>
  );
}
