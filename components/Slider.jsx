'use client'
import React from 'react';
import styles from "../styles/modules/slider.module.scss";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Slider() {
  const slides = ["Day Pass", "Private Offices", "Office Suites", "Assorted Rooms", "Conference Halls", "Dedicated Seats"];
  const router = useRouter();

  const handleClick = (i)=>{
    let link = 'services/'
    link += slides[i].toLowerCase().replace(/\s+/g, '-'); 
    router.push(link);
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slidesTrack}>
        {slides.map((slide, i) => (
          <>
            <div className={styles.flexRow} key={i} onClick={()=>handleClick(i)}>
              <p>{slide}</p>
            </div>
            <div>
              <Image src="/slider.png" alt="star" height="20" width="20" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
