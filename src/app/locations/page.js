import React from 'react';
import { navItems } from '@/data/navItems';
import styles from "@/styles/modules/locationsPage.module.scss";
import Navbar from '@/components/Navbar';
import Slider from '@/components/Slider';
import Footer from '@/components/sections/Footer';

const Locations = () => {
    return (
        <div className={styles.main}>
            <Navbar navItems={navItems}/>
            <header className={styles.heading}>
                <h1>Locations</h1>
                <p>Home/ <span className={styles.textOrange}>Locations</span></p>
            </header>
            <Slider/>
            <main className={styles.locationsContainer}>
               
            </main>
            
            <Slider/>
            <footer>
                <Footer navItems={navItems}/>
            </footer>
        </div>
    );
};

export default Locations;