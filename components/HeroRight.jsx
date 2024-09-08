import React from 'react'
import styles from "@/styles/modules/hero.module.scss";
import ExploreUs from './svg/ExploreUs';
import HeroSecArrow from './svg/HeroSecArrow';

export default function HeroRight() {
  return (
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
