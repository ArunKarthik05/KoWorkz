import React from 'react'
import styles from "../styles/modules/slider.module.scss";
import Image from 'next/image';

export default function Slider() {
    const slides = ["Day Pass","Private Offices","Office Suites","Assorted Rooms","Conference Halls","Dedicated Seats"];

  return (
    <div className={styles.slider}>
        {slides.map((slide,i)=>{
            return(
              <div className={styles.flexRow} key={i}>
                <p >{slide}</p>
                <Image src="/slider.png" alt='star' height="20" width="20"/>
              </div>
            )
        })}
    </div>
  )
}
