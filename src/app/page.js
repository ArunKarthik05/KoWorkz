import styles from "../../styles/modules/page.module.scss";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <section>
        <HeroSection/>
      </section>
    </main>
  );
}
