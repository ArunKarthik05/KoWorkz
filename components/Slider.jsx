import React from 'react';
import styles from "../styles/modules/slider.module.scss";
import Image from 'next/image';

export default function Slider() {
  const slides = ["Day Pass", "Private Offices", "Office Suites", "Assorted Rooms", "Conference Halls", "Dedicated Seats"];

  const doubledSlides = [...slides, ...slides];

  return (
    <div className={styles.slider}>
      <div className={styles.slidesTrack}>
        {doubledSlides.map((slide, i) => (
          <div className={styles.flexRow} key={i}>
            <p>{slide}</p>
            <Image src="/slider.png" alt="star" height="20" width="20" />
          </div>
        ))}
      </div>
    </div>
  );
}
