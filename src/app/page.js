import styles from "../../styles/modules/page.module.scss";
import Navbar from "@/components/Navbar";
import Contact from "@/components/sections/Contact";
import HeroSection from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <sectio className={styles.hero}>
        <HeroSection/>
      </sectio>

      <section>
        <Services/>
      </section>

      <section>
        <Contact/>
      </section>
    </main>
  );
}
