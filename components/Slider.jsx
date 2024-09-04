import React from 'react'
import styles from "../styles/modules/slider.module.scss";

export default function Slider() {
    const slides = ["Day Pass","Private Offices","Office Suites","Assorted Rooms","Conference Halls","Dedicated Seats"];

  return (
    <div className={styles.slider}>
        {slides.forEach((slide,i)=>{
            <h2 key={i}>{slide}</h2>
        })}
    </div>
  )
}
