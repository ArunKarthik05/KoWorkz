import React from 'react'
import styles from "../../styles/modules/solutions.module.scss";
import Image from 'next/image';
import StarIcon from "../../public/Assets/Solutions/Chair.svg";
import Calender from "../../public/Assets/Solutions/Calender.svg";
import Sanitizer from "../../public/Assets/Solutions/Sanitizer.svg";

export default function Solutions() {
    const Solutions = [
        {
            image:<StarIcon/>,
            heading:"Flexibility in Booking Spaces",
            about: "Unmatched flexibility tailored to fit your schedule and business needs."
        },
        {
            "image": <Calender/>,
            "heading": "Daily, Weekly, Monthly",
            "about": "Choose from flexible daily, weekly, or monthly coworking spaces."
        },
        {
            "image": <Sanitizer/>,
            "heading": "Sanitized Workspaces",
            "about": "Clean, safe, and well maintained sanitized workspaces for your needs."
        }        
        
    ]
  return (
    <div className={styles.main}>
        <div className={styles.content}>
            <div className={styles.lineContent}>
            <div className={styles.line}></div>
            <p className={styles.lineTag}>Why Choose Us</p>
            </div>
            <h1 className={styles.header}>Discover our <br /> CoWorking Solutions</h1>

            <div className={styles.gridContainer}>
                {Solutions.map((solution,i)=>{
                    return(
                        <div key={i} className={styles.itemContainer}>
                            <div className={styles.svgContainer}>
                             {solution.image}
                            <div className={styles.star}><Image src="/Assets/star.png" alt='star' height="30" width="30"/></div>
                            </div>
                            <h2>{solution.heading}</h2>
                            <p>{solution.about}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
