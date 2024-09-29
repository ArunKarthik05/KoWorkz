'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from "../../styles/modules/hero.module.scss";
import useIsMobile from '@/CustomHooks/IsMobile';
import Image from 'next/image';
import HeroRight from '../HeroRight';

export default function HeroSection({ refs }) {
  const isMobile = useIsMobile();
  const [centres, setCentres] = useState(0);
  const [clients, setClients] = useState(0);
  const [bookings, setBookings] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // To prevent multiple animations
  const statsRef = useRef(null); // Ref for the stats section

  useEffect(() => {
    const targetCentres = 5;
    const targetClients = 15;
    const targetBookings = 40;

    const incrementValues = (target, setValue, delay) => {
      let currentValue = 0;
      const interval = setInterval(() => {
        currentValue += 1;
        if (currentValue >= target) {
          setValue(target);
          clearInterval(interval);
        } else {
          setValue(currentValue);
        }
      }, delay);
    };

    if (isMobile && !hasAnimated) {
      console.log("true")
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              incrementValues(targetCentres, setCentres, 100);
              incrementValues(targetClients, setClients, 50);
              incrementValues(targetBookings, setBookings, 30);
              setHasAnimated(true);
              observer.disconnect(); // Stop observing after the animation starts
            }
          });
        },
        { threshold:1 } // Trigger when 50% of the div is visible
      );

      if (statsRef.current) {
        observer.observe(statsRef.current);
      }

      return () => {
        if (statsRef.current) {
          observer.unobserve(statsRef.current);
        }
      };
    } else if (!isMobile) {
      incrementValues(targetCentres, setCentres, 100);
      incrementValues(targetClients, setClients, 50);
      incrementValues(targetBookings, setBookings, 30);
    }
  }, [isMobile, hasAnimated]);

  return (
    <div className={styles.heroMain}>
      <div className={styles.textMain}>
        <div className={styles.heroLeft}>
          <h1>Ready to Move-in complete</h1>
          <h1 className={styles.textOrange}>WorkSpace Solutions</h1>
        </div>

        {!isMobile && <HeroRight refs={refs} />}
      </div>

      <div className={styles.serviceContainer}>
        {["Private Offices", "Office Suites", "Assorted Cabins", "Conference Rooms", "Day Pass", "Dedicated Seats"].map((service, i) => (
          <div className={styles.gradientContainer} key={i}>
            <p>{service}</p>
          </div>
        ))}
      </div>

      {isMobile && <div className={styles.gradientLine}></div>}

      <div className={styles.heroImage}>
        <div className={styles.imageContainer}>
          <Image src="/hero.jpeg" alt="koworkz-home" fill />
        </div>
        <div className={styles.stats} ref={statsRef}>
          <h2>{centres}+ Centres</h2>
          <h2>{clients}+ Clients</h2>
          <h2>{bookings}+ Bookings</h2>
        </div>
      </div>
    </div>
  );
}
