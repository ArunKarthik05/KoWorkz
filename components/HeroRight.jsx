import React from 'react'
import styles from "@/styles/modules/hero.module.scss";
import ExploreUs from './svg/ExploreUs';
import HeroSecArrow from './svg/HeroSecArrow';

export default function HeroRight({ref}) {
  const handleClick = ()=>{
    ref.contact.current.scrollIntoView({behavior:"smooth"})
    if (ref.current) {
      console.log("in")
      ref.contact.current.scrollIntoView({behavior:"smooth"})
    }
  }
  return (
    <div className={styles.heroRight}>
        <div className={styles.bgCircle} onClick={handleClick}>
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
