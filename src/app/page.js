import styles from "../../styles/modules/page.module.scss";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/Hero";
import Locations from "@/components/sections/Locations";
import Services from "@/components/sections/Services";
import Solutions from "@/components/sections/Solutions";

export default function Home() {
  const navItems = [
    { name: 'Home', link: '' },
    { name: 'Services', link: '' },
    { name: 'Locations', link: '' },
    { name: 'About Us', link: '' },
    { name: 'Contact Us', link: '' },
  ];
  return (
    <main className={styles.main}>
      <Navbar navItems={navItems}/>
      <section className={styles.hero}>
        <HeroSection/>
      </section>

      <section>
        <Services/>
      </section>

      <section>
        <Locations/>
      </section>

      <section>
        <Solutions/>
      </section>

      <section>
        <Contact/>
      </section>
      <Slider/>
      <section>
        <Footer navItems={navItems}/>
      </section>

    </main>
  );
}
