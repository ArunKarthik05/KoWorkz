import React from 'react';
import { navItems } from '@/data/navItems';
import styles from "@/styles/modules/locationsPage.module.scss";
import Navbar from '@/components/Navbar';
import Slider from '@/components/Slider';
import Footer from '@/components/sections/Footer';
import Contact from '@/components/sections/Contact';
import ExploreUs from '@/components/svg/ExploreUs';
import HeroSecArrow from '@/components/svg/HeroSecArrow';

const ContactUs = () => {
    return (
        <div className={styles.main}>
            <Navbar navItems={navItems}/>
            <header className={styles.heading}>
                <h1>Contact Us</h1>
                <p>Home/ <span className={styles.textOrange}>Contact Us</span></p>
            </header>
            <Slider/>
            <main className={styles.contactContainer}>
               <section className={styles.contactUs}>
                    <Contact/>   
                <div className={styles.heroRight}>
                    <div className={styles.bgCircle}>
                        <div className={styles.glassyDiv}>
                            <div className={styles.svgContainer}>
                                <ExploreUs/>
                            </div>
                            <div className={styles.arrow}>
                                <HeroSecArrow/>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            <Slider/>
            <footer>
                <Footer navItems={navItems}/>
            </footer>
        </div>
    );
};

export default ContactUs;