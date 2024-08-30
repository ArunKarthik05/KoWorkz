import styles from "../../styles/modules/page.module.scss";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <section>
        <HeroSection/>
      </section>

      <section>
        <Services/>
      </section>
    </main>
  );
}
