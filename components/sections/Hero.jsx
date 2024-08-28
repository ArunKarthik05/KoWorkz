import React from 'react'
import styles from "../../styles/modules/hero.module.scss";

export default function HeroSection() {
  const Services = ["Private Offices","Office Suites","Assorted Cabins","Conference Rooms","Dedicated Seats","Day Pass"]
  return (
    <div className={styles.heroMain}>
      <div className={styles.textMain}>
        <div className={styles.heroLeft}>
          <h1>Ready to Move-in</h1>
          <h1 className={styles.textOrange}>Coworking Spaces</h1>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.bgCircle}>
            <p>Explore Us</p>
            <div className={styles.glassyDiv}></div>
          </div>
        </div>
      </div>

      <div className={styles.serviceContainer}>
        {Services.map((service,i)=>{
          return(
            <p key={i}>{service}</p>
          )
        })
        }
      </div>

      <div className={styles.heroImage}>
        <div className={styles.imageContainer}></div>
        <div className={styles.stats}></div>
      </div>
    </div>
  )
}
