'use client'
import React, { useState, useEffect } from 'react';
import styles from "../../styles/modules/serviceDetails.module.scss";
import {ServiceDetailsData} from '@/data/ServiceDetailsData';

export default function ServiceDetails({serviceName}) {
  const data = ServiceDetailsData[serviceName];
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Trigger fade-out
      setTimeout(() => {
        setCurrentFeedbackIndex((prevIndex) =>
          prevIndex === data.feedback.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false); // Trigger fade-in
      }, 500); // Wait for fade-out to complete before switching feedback
    }, 5000); // Change feedback every 5 seconds

    return () => clearInterval(interval);
  }, [data.feedback.length]);

  return (
    <div className={styles.main}>
        <div className={styles.slider}>
            <div className={styles.imgContainer}>
                {/* <Image/> */}
            </div>
        </div>

        {/* content */}
        <div className={styles.contentContainer}>
        <h2 className={styles.heading}>{data.heading}</h2>
        <p>{data.about}</p>
        </div>

        <div className={styles.contentContainer}>
          <h2 className={styles.heading}>Our Coworkspace Features</h2>
          <div className={styles.featuresContainer}>
            {data.features.map((feature,i)=>{
              return(
                <div className={styles.feature} key={i}>
                  <div className={styles.circle}><p>0{i+1}</p></div>
                  <p className={styles.details}>{feature}</p>
                </div>
              )
            })}
          </div>
        </div>
        
      <div className={styles.contentContainer}>
        <h2 className={styles.heading}>Hear it from our Clients</h2>
        <div className={styles.feedBackContainer}>
          <div
            className={`${styles.feedback} ${isFading ? styles.fadeOut : styles.fadeIn}`}
          >
            <p><span className={styles.quote}>“</span>{data.feedback[currentFeedbackIndex]}</p>
          </div>
        </div>
      </div>
    
    </div>
  )
}
