'use client'
import React from 'react';
import { navItems } from '@/data/navItems';
import styles from "@/styles/modules/SingleService.module.scss";
import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';
import Slider from '@/components/Slider';
import ServiceDetails from '@/components/sections/ServiceDetails';

const Services = ({params}) => {
    const service = params.service;

    return (
        <div className={styles.main}>
            <Navbar navItems={navItems}/>
            <header>
                <h1>Services</h1>
                <p>Home/ <span className={styles.textOrange}>Services</span></p>
            </header>
            <main>
                <Slider/>  
                <section>
                <ServiceDetails serviceName={service}/>
                </section>
            </main>
            
            <Slider/>
            <section>
                <Footer navItems={navItems}/>
            </section>
        </div>
    );
};

export default Services;