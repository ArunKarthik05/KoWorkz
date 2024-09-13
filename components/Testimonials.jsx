'use client'
import React, { useState } from 'react';
import styles from "@/styles/modules/testimonials.module.scss";
import HeroSecArrow from './svg/HeroSecArrow';
import { feedbacks } from '@/data/Feedbacks';
import Image from 'next/image';
import Line from "@/public/Assets/Line.svg"

export default function Testimonials({padding}) {
    const data = feedbacks;
    const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
    const [animation, setAnimation] = useState(''); // To track animation classes

    // Function to move to the next testimonial
    const nextFeedback = () => {
        setAnimation('fadeOut'); // Start fade-out animation
        setTimeout(() => {
            setCurrentFeedbackIndex((prevIndex) => 
                (prevIndex + 1) % data.length
            );
            setAnimation('fadeIn'); // Start fade-in animation
        }, 500); // Match the animation duration (0.5s)
    };

    // Function to move to the previous testimonial
    const prevFeedback = () => {
        setAnimation('fadeOut'); // Start fade-out animation
        setTimeout(() => {
            setCurrentFeedbackIndex((prevIndex) => 
                (prevIndex - 1 + data.length) % data.length
            );
            setAnimation('fadeIn'); // Start fade-in animation
        }, 500); // Match the animation duration (0.5s)
    };

    return (
        <div className={styles.main}>
            <div className={padding === false ? styles.content2 : styles.content}>
                <div className={styles.headingContent}>
                    <div>
                        <div className={styles.lineContent}>
                            <>
                              <Line/>
                            </>
                            <p className={styles.lineTag}>Client Testimonials</p>
                        </div>
                        <h1 className={styles.header}>Testimonials That <br /> Speak Our Results</h1>
                    </div>
                </div>

                <div className={styles.testimonialContainer}>
                    {/* Left Arrow */}
                    <div className={styles.circle} onClick={prevFeedback}>
                        <div><HeroSecArrow/></div>
                    </div>

                    {/* Testimonials Content */}
                    <div className={`${styles.testimonials}`}>
                        <div className={styles.quoteContainer}>
                            <div className={styles.imgContainer}>
                              <Image className={`${styles[animation]}`} src={data[currentFeedbackIndex].image} alt={`feedback image-${currentFeedbackIndex}`} fill/>
                            </div>
                            <span className={styles.quoteOpening}><p>“</p></span>
                        </div>
                        <div className={`${styles.textContent}  ${styles[animation]}`}>
                            {[...Array(5)].map((_, index) => (
                                <span key={index} className={styles.star}>
                                    <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5 30.9864L28.9572 36.6645C30.6891 37.7051 32.8085 36.1668 32.3527 34.2213L29.846 23.5438L38.2093 16.35C39.7362 15.0379 38.9158 12.5495 36.9104 12.3912L25.9036 11.4637L21.5965 1.37428C20.8217 -0.458094 18.1783 -0.458094 17.4035 1.37428L13.0964 11.441L2.08961 12.3685C0.0842205 12.5269 -0.736165 15.0153 0.790663 16.3274L9.15403 23.5211L6.6473 34.1987C6.19153 36.1442 8.31086 37.6825 10.0428 36.6419L19.5 30.9864Z" fill="#FDAF23"/>
                                    </svg>
                                </span>
                            ))}
                            <p className={styles.text}>{data[currentFeedbackIndex].feedback}</p>
                            <p className={styles.name}>{data[currentFeedbackIndex].name}</p>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <div className={`${styles.circle} ${styles.right}`} onClick={nextFeedback}>
                        <div><HeroSecArrow/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
