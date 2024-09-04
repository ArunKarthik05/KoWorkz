import React from 'react'
import styles from "../../styles/modules/Footer.module.scss";
import OrangeButton from '../OrangeButton';

export default function Footer() {
  return (
    <div className={styles.main}>
        <div className={styles.content}>
            <div className={styles.heading}>
                <h2>Let&#39;s Connect there</h2>
                <OrangeButton text="Contact Us Now"/>
            </div>
            <div className={styles.info}></div>
            <div className={styles.copyRight}></div>
        </div>
    </div>
  )
}
