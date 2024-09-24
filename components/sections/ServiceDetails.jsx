'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from "../../styles/modules/serviceDetails.module.scss";
import {ServiceDetailsData} from '@/data/ServiceDetailsData';
import Testimonials from '../Testimonials';
import Image from 'next/image';

export default function ServiceDetails({serviceName}) {
  console.log(serviceName)
  const data = ServiceDetailsData[serviceName];
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [activeContainer, setActiveContainer] = useState(0); 
  const scrollContainer = useRef(null);

  const handleNext = () => {
    if (activeContainer < 2 ) {
        scrollContainer.current.scrollBy({ left: 1000, behavior: 'smooth' });
        setActiveContainer(activeContainer + 1);
    }else{
        setTimeout(() => {
            scrollContainer.current.scrollTo({ left: 0, behavior: 'auto' }); 
            setActiveContainer(0);
        }, 500);
    }
};

  useEffect(() => {
    const intervalId = setInterval(() => {
        handleNext();
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [activeContainer]); 

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); 
      setTimeout(() => {
        setCurrentFeedbackIndex((prevIndex) =>
          prevIndex === data.feedback.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false); 
      }, 500); 
    }, 5000); 

    return () => clearInterval(interval);
  }, [data.feedback.length]);

  return (
    <div className={styles.main}>
        <div className={styles.slider} ref={scrollContainer}>
            {data.images.map((image,i)=>(
              <div className={styles.imgContainer} key={i}>
                <Image src={`/services/${image}`} alt={image} height={300} width={800}/>
              </div>
            ))
            }
        </div>

        {/* content */}
        <div className={styles.contentContainer}>
        <h2 className={styles.subHeading}>{data.heading}</h2>
        <p>{data.about}</p>
        </div>

        <div className={styles.contentContainer}>
          <h2 className={styles.subHeading}>Our Coworkspace Features</h2>
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
        
        <div className={styles.TestimonialsContainer}>
            <Testimonials padding={false}/>
        </div>
    
    </div>
  )
}
