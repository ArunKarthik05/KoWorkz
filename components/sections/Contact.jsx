import React from 'react'
import styles from "../../styles/modules/contact.module.scss";
import OrangeButton from '../OrangeButton';
import SocialMedia from '../SocialMedia';

export default function Contact() {
  return (
    <div className={styles.main}>
        <div className={styles.content}>
            <div className={styles.lineContent}>
            <div className={styles.line}></div>
            <p className={styles.lineTag}>Contact Us</p>
            </div>
            <h1 className={styles.header}>Join Us in Our <span>Creative</span><br/>CoWorking Space</h1>

            <div className={styles.contactFlex}>
                <div className={styles.flexLeft}>
                    <div class={styles.contactForm}>
                        <form>
                            <div className={`${styles.flexRow} ${styles.formGroup}`}>
                            <input type="text" id="firstName" name="firstName" placeholder='First name*' required/>
                            
                            <input type="text" id="lastName" name="lastName" placeholder='Last name*' required/>
                            </div>
                            
                            <div className={`${styles.flexRow} ${styles.formGroup}`}>
                            <input type="email" id="email" name="email" placeholder='Email*' required/>
                            
                            <input type="tel" id="phone" name="phone" placeholder='Phone'/>
                            </div>
                            
                            <div className={styles.formGroup}>
                            <input type="text" id="subject" name="subject" placeholder='Subject*' required/>
                            </div>
                            
                            <div className={styles.formGroup}>
                            <textarea id="message" name="message" rows="5" placeholder='Message*' required></textarea>
                            </div>
                            
                            <div className={styles.btnContainer}>
                                <OrangeButton text="Message Us"/>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right */}
                <div className={styles.flexRight}>
                    <div>
                        <h2>Address</h2>
                        <p>4517 Washington Ave. Manchester,Kentucky 39495</p>
                    </div>
                    <div>
                        <h2>Contact</h2>
                        <p>Phone : +919999999999</p>
                        <p>Email : example@gmail.com </p>
                    </div>
                    <div>
                        <h2>Stay Connected</h2> 
                        <SocialMedia/>
                    </div>
                </div>    
            </div> 
        </div>
    </div>
  )
}
