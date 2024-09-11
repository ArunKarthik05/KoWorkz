'use client'
import React,{useState,useEffect} from 'react'
import styles from "../../styles/modules/hero.module.scss";
import useIsMobile from '@/CustomHooks/IsMobile';
import Image from 'next/image';
import HeroRight from '../HeroRight';

export default function HeroSection({ref}) {
  const isMobile = useIsMobile();

  const Services = ["Private Offices","Office Suites","Assorted Cabins","Conference Rooms","Day Pass","Dedicated Seats"];4
  const [centres, setCentres] = useState(0);
  const [clients, setClients] = useState(0);
  const [bookings, setBookings] = useState(0);

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

    incrementValues(targetCentres, setCentres, 100);
    incrementValues(targetClients, setClients, 50);
    incrementValues(targetBookings, setBookings, 30);
  }, []);
  return (
    <div className={styles.heroMain}>
      <div className={styles.textMain}>
        <div className={styles.heroLeft}>
          <h1>Ready to Move-in</h1>
          <h1 className={styles.textOrange}>Coworking Spaces</h1>
        </div>

        {!isMobile &&(
          <HeroRight ref={ref}/>
          )
        }
      </div>

      <div className={styles.serviceContainer}>
          {Services.map((service,i)=>{
            return(
              <div className={styles.gradientContainer} key={i}>
               <p key={i}>{service}</p>
              </div>
            )
          })
          }
      </div>

      {isMobile && (
        <div className={styles.gradientLine}></div>
      )}

      <div className={styles.heroImage}>
        <div className={styles.imageContainer}>
          <Image src="/hero-section.webp" alt="koworkz-home" fill/>
        </div>
        <div className={styles.stats}>
          <h2>{centres}+ Centres</h2>
          <h2>{clients}+ Clients</h2>
          <h2>{bookings}+ Bookings</h2>
        </div>
      </div>
    </div>
  )
}
