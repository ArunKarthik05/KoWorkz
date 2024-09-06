import React from 'react'
import styles from "../../styles/modules/Footer.module.scss";
import OrangeButton from '../OrangeButton';
import Arrow from "../../public/Assets/footerarrow.svg";

export default function Footer({navItems}) {
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
                    <p key={i} className={styles.item}>{item.name}</p>
                  )
                })}
              </div>

              <div className={styles.contact}>
                <h3 className={styles.nav}>Contact</h3>
                <p>+91 9988776655</p>
                <p>www.example.com</p>
                <p>example@gmail.com</p>
                <p>12,Lakshmi Mills,<br/>Coimbatore<br/>India</p>
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
              <p>All Rights Reserved</p>
              <p>User Terms & Conditions | Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}
