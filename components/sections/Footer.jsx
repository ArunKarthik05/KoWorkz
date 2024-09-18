'use client'
import React from 'react'
import styles from "../../styles/modules/Footer.module.scss";
import OrangeButton from '../OrangeButton';
import Arrow from "../../public/Assets/footerarrow.svg";
import { useRouter,usePathname } from 'next/navigation';

export default function Footer({navItems,refs}) {
  const router = useRouter();
  const currentPath = usePathname()

  const handleScroll = (ref,index) => {
    if(index!==0 && index!==4){
      if(currentPath === "/contact-us"){  router.push("/")  }
      
      const currentRef = refs[ref].current;
      console.log(refs[ref])
      if (currentRef) {
        currentRef.scrollIntoView({ behavior: 'smooth' });
      }
    }else{
      router.push(ref);
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.content}>
            <div className={styles.heading}>
                <h2>Let&#39;s <span className={styles.textOrange}>Connect</span> there</h2>
                <OrangeButton text="Contact Us Now"/>
            </div>
            <div className={styles.info}>
              <div className={styles.infoDiv1}>
                <div className={styles.name}>
                  <svg width="35px" height="35px" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.9574 0H0V44H14.9574V0Z" fill="#F9B218"/>
                    <path d="M37.0002 0H20.4683V18.8571H37.0002V0Z" fill="#F15B59"/>
                    <path d="M37.0002 25.9286H20.4683V44H37.0002V25.9286Z" fill="#F15B59"/>
                  </svg>
                    <h2>KoWorkz</h2>
                  </div>
                  <p className={styles.about}>
                  Experience the best co-working solutions with our premium office spaces, designed to boost productivity and collaboration. Join a thriving community in state-of-the-art workspaces tailored to meet your business needs.
                  </p>
              </div>

              <div className={styles.navContainer}>
                <h3 className={`${styles.nav} ${styles.textOrange}`}>Navigation</h3>
                {navItems.map((item,i)=>{
                  return(
                    <p onClick={()=>handleScroll(item.link,i)} key={i} className={styles.item}>{item.name}</p>
                  )
                })}
              </div>

              <div className={styles.contact}>
                <h3 className={styles.nav}>Contact</h3>
                <p>+91 9894172765</p>
                <p>www.koworkz.com</p>
                <p>koworkz@gmail.com</p>
                <p className={styles.addressLine}>Elysium Towers,<br/>Park Gate Rd,<br/>ATT Colony,<br/>Gopalapuram,<br/>Coimbatore,<br/>Tamil Nadu 641018</p>
              </div>

              <div>
                <h3 className={styles.nav}>Get Latest Information</h3>

                <div className={styles.inputContainer}>
                  <input type="text" placeholder='Email Address'/>
                  <div className={styles.orangeDiv}>
                    <div  className={styles.arrowsvg}><Arrow/></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.copyRight}>
              <p>CopyRights 2024 @<span className={styles.textOrange}>Koworkz</span></p>
              <div className={styles.flowED}>
                <svg fill="#e35e16" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487.9 487.9" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M470.491,284.1l-1.3-2c-8.3-12.7-16.8-25.9-25.4-38.8c7.4-11.2,14.8-22.6,21.9-33.6l4.1-6.4c7.5-11.7,9.6-24.3,5.8-35.6 c-3.8-11.3-13.1-20.2-26.1-25c-8.1-3-16.4-6.1-24.3-9.1c-6.5-2.5-13.2-5-19.8-7.5c-0.5-10.3-1-20.6-1.6-30.6c-0.3-6-0.7-12-1-18 c-1.2-22.5-17-38.3-38.5-38.3c-3.9,0-7.9,0.5-11.9,1.6l-3.5,0.9c-14.3,3.8-29,7.7-43.5,11.9c-6.5-8.1-13.1-16.2-19.5-24.1 c-3.7-4.5-7.3-9-11-13.5c-8.4-10.3-19.5-16-31.3-16s-23,5.7-31.4,16.1l-4.8,5.9c-8.4,10.4-17.2,21.2-25.6,32 c-11.5-3.2-23-6.3-32.5-8.8c-3.5-0.9-6.9-1.8-9.9-2.6c-0.1,0-0.2-0.1-0.4-0.1c-5.4-1.3-10.5-1.9-15.3-1.9 c-22.5,0-37.5,14.1-39.2,36.8c-1.3,17.9-2,35.4-2.5,49.4c-15.9,6-31.3,11.9-45.9,17.7c-12.1,4.8-20.7,13.5-24.2,24.6 c-3.6,11.1-1.6,23.3,5.4,34.3c8.5,13.2,17.6,27.1,26.8,41c-9.5,14.4-18.6,28.5-27.2,42.2c-6.5,10.3-8.2,22.5-4.6,33.3 c3.6,10.9,12.3,19.7,23.8,24.2l4.3,1.7c13.8,5.3,28,10.8,42.2,16.1c0.3,4.8,0.6,9.6,0.9,14.3c0.8,10.9,1.5,21.2,1.4,31.6 c-0.1,11.1,4.2,21.9,11.8,29.5c7.3,7.4,17.1,11.4,27.6,11.4c4.5,0,9-0.7,13.5-2.1c9.8-3.1,20.1-5.8,30.1-8.4 c4.8-1.3,9.8-2.6,14.8-3.9c10.3,12.9,20.7,25.6,30.5,37.6c8.5,10.3,19.6,16,31.3,16c11.8,0,22.9-5.7,31.3-16.1 c11.3-13.9,20.9-25.8,30.3-37.8c12.3,3.4,24.8,6.7,36.9,9.9l10.3,2.7c3.9,1,7.8,1.5,11.6,1.5l0,0c21.2,0,37.5-15.9,38.6-37.9 c0.3-5.5,0.6-11,0.9-16.6c0.6-10.7,1.2-21.7,1.6-32.6c14.1-5.3,28.2-10.8,42-16.2l3.3-1.3c12.3-4.8,21.1-13.6,24.7-24.8 C479.591,307.3,477.691,295.1,470.491,284.1z M450.291,310.2c-1.1,3.4-4.2,6.2-8.8,8l-3.3,1.3c-14.7,5.7-29.9,11.6-44.9,17.3 c-9,3.4-13.8,9.8-14.1,19.1c-0.4,12-1.1,24.2-1.8,36.1c-0.3,5.6-0.6,11.1-0.9,16.7c-0.4,7.7-4.7,12.3-11.6,12.3l0,0 c-1.5,0-3-0.2-4.6-0.6l-10.3-2.7c-13.4-3.5-27.2-7.2-40.8-11c-2.1-0.6-4.1-0.9-6-0.9c-6.1,0-11.3,2.7-15.6,8 c-10.2,12.9-20.5,25.7-32.7,40.8c-3.2,4-6.9,6.1-10.3,6.1c-3.5,0-7.2-2.2-10.5-6.2c-10.6-12.9-21.9-26.7-32.9-40.6 c-5.2-6.5-11.3-7.9-15.4-7.9c-2,0-4,0.3-6.2,0.9c-6.1,1.7-12.4,3.4-18.5,5c-10.3,2.7-20.9,5.5-31.3,8.8 c-5.7,1.8-10.5,0.9-13.9-2.5c-2.6-2.6-4-6.3-4-10.3c0.1-11.4-0.7-22.7-1.4-33.7c-0.4-5.8-0.8-11.8-1.1-17.6 c-0.5-11.6-7.7-16.6-13.7-18.8c-15.2-5.6-30.6-11.5-45.6-17.3l-4.3-1.7c-4-1.5-6.8-4.2-7.9-7.5c-1.1-3.2-0.4-6.9,1.8-10.4 c9.1-14.4,18.8-29.5,28.9-44.7c5.2-7.8,5.2-16,0-23.8c-9.8-14.6-19.6-29.6-28.6-43.7c-2.6-4.1-3.5-8.1-2.4-11.4c1-3.2,4-6,8.4-7.7 c15.6-6.2,32.2-12.5,49.3-19c8.5-3.2,13.2-9.7,13.5-18.9c0.5-14.3,1.2-33.3,2.6-52.5c0.6-8.4,4-11.7,12.2-11.7 c2.6,0,5.6,0.4,8.9,1.2c3,0.8,6.3,1.7,9.8,2.6c10.6,2.8,22.6,6,34.7,9.5c2.6,0.7,4.9,1.1,7.2,1.1c6.7,0,12.4-3,17-8.9 c8.8-11.4,18.1-22.8,27-33.9l4.8-5.9c3.2-3.9,6.9-6.1,10.4-6.1s7.2,2.1,10.3,6c3.7,4.5,7.3,9,11,13.5c7.1,8.7,14.5,17.8,21.6,26.7 c4.4,5.5,9.8,8.3,16,8.3c2.1,0,4.3-0.3,6.6-1c15.5-4.5,31.4-8.7,46.8-12.8l3.5-0.9c1.7-0.5,3.4-0.7,4.9-0.7 c9.9,0,11.4,8.9,11.6,12.7c0.3,6,0.6,12,1,18.1c0.6,11.2,1.3,22.8,1.8,34.2c0.4,9.1,5.2,15.8,13.6,18.9c7.8,2.9,15.7,5.9,23.4,8.8 c8,3,16.3,6.2,24.6,9.2c5.2,1.9,8.7,4.9,9.9,8.3c1.1,3.4,0.1,7.8-2.9,12.4l-4.1,6.4c-7.7,12-15.7,24.4-23.7,36.4 c-6.6,9.9-3.7,18.4,0,23.8c9.3,13.7,18.4,27.9,27.3,41.6l1.3,2.1C450.491,302.8,451.391,306.9,450.291,310.2z"></path> <path d="M297.091,190.2l-78.6,78.6l-27.8-27.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l37.3,37.3 c0.3,0.3,0.7,0.6,1,0.9c2.5,2,5.5,3,8.5,3c3.5,0,6.9-1.3,9.5-4l88.2-88.2c5.3-5.3,5.3-13.8,0-19.1 C310.891,184.9,302.391,184.9,297.091,190.2z"></path> </g> </g> </g>
                </svg>
              <p>
                Created by <span className={styles.textOrange}>FlowED</span></p>
              </div>
              <p>User Terms & Conditions | Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}
