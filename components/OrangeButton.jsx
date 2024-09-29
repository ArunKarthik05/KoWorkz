'use client'
import React, { useState } from 'react'
import styles from '../styles/modules/Button.module.scss';
import { useRouter } from 'next/navigation'

export default function OrangeButton({text,redirectLink}) {
    const [isHovered,setIsHovered] = useState(false);
    const router = useRouter();
    
    const handleHover = ()=>{
      setIsHovered((cur)=>!cur);
    }
    const handleClick = () => {
      if (redirectLink) {
        let link = 'services/'
        link += redirectLink.toLowerCase().replace(/\s+/g, '-'); 
          console.log(link)
          router.push(link); 
      }
  };
  return (
    <div className={styles.btnMain} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <button className={`${styles.button} ${isHovered ? styles.add : styles.remove}`}>{text}</button>
        <div  className={styles.arrowContainer}
        onClick={handleClick}
        >
        <svg width="34px" height="34px" viewBox="0 0 41 40" fill="none">
            <ellipse cx="20.5" cy="20" rx="20.5" ry="20" fill="black"/>
            <path d="M32.7317 19.2149C31.2907 19.2149 28.9915 18.6355 27.1325 17.219C25.3071 15.828 23.9196 13.6481 24.1551 10.3634L22.8157 10.2563C22.5394 14.1106 24.2056 16.7378 26.3465 18.3692C26.7644 18.6876 27.2008 18.9687 27.6452 19.2149H9.2251V20.6333H27.2295C26.9323 20.7942 26.6407 20.9734 26.3579 21.1729C24.185 22.706 22.6256 25.375 22.9869 29.7435L24.3251 29.6201C24.004 25.7377 25.3618 23.5816 27.1041 22.3524C28.9047 21.082 31.208 20.7409 32.8 20.7409L32.8 19.3225C32.7774 19.3225 32.7546 19.3226 32.7317 19.3227V19.2149Z" fill="url(#paint0_linear_127_274)"
            />
            <defs>
            <linearGradient id="paint0_linear_127_274" x1="11.2751" y1="15.4529" x2="25.2216" y2="23.8556" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F9B218"/>
            <stop offset="1" stop-color="#F15B59"/>
            </linearGradient>
            </defs>
            </svg>
        </div>
    </div>
  )
}
