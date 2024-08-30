'use client'
import React from 'react'
import styles from "../../styles/modules/hero.module.scss";
import useIsMobile from '@/CustomHooks/IsMobile';
import ExploreUs from '../svg/ExploreUs';
import HeroSecArrow from '../svg/HeroSecArrow';

export default function HeroSection() {
  const isMobile = useIsMobile();

  const Services = ["Private Offices","Office Suites","Assorted Cabins","Conference Rooms","Dedicated Seats","Day Pass"]
  return (
    <div className={styles.heroMain}>
      <div className={styles.textMain}>
        <div className={styles.heroLeft}>
          <h1>Ready to Move-in</h1>
          <h1 className={styles.textOrange}>Coworking Spaces</h1>
        </div>

        {!isMobile &&(
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
        <div className={styles.imageContainer}></div>
        <div className={styles.stats}></div>
      </div>
    </div>
  )
}
