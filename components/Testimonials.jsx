'use client'
import React, { useEffect, useState } from 'react'
import styles from "@/styles/modules/testimonials.module.scss";
import HeroSecArrow from './svg/HeroSecArrow';
import { feedbacks } from '@/data/Feedbacks';

export default function Testimonials() {
    const data = feedbacks;
    const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); 
      setTimeout(() => {
        setCurrentFeedbackIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false); 
      }, 500); 
    }, 5000); 

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className={styles.main}>
        <div className={styles.content}>
            <div className={styles.headingContent}>
               <div>
                <div className={styles.lineContent}>
                    <div className={styles.line}></div>
                    <p className={styles.lineTag}>Client Testimonials</p>
                    </div>
                    <h1 className={styles.header}>Testimonials That <br /> Speaks Our Results</h1>
               </div>
            </div>

            <div className={styles.testimonialContainer}>
                <div className={styles.circle}>
                    <div><HeroSecArrow/></div>
                </div>

                <div className={styles.testimonials}
                >
                    <div>
                        <div className={styles.imgContainer}>
                            <span className={styles.quoteOpening}><p>“</p></span>
                        </div>
                    </div>
                    <div className={`${styles.textContent} ${isFading ? styles.fadeOut : styles.fadeIn}`}>
                    {[...Array(5)].map((_, index) => (
                        <span key={index} className={styles.star}>
                            *
                        </span>
                    ))}
                    <p className={styles.text}>{data[currentFeedbackIndex].feedback}</p>
                        <p className={styles.name}>{data[currentFeedbackIndex].name}</p>
                    </div>
                </div>

                <div className={styles.circle}>
                    <div><HeroSecArrow/></div>
                </div>
            </div>
        </div>
    </div>
  )
}
