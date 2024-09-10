import React from 'react'
import styles from "../../styles/modules/solutions.module.scss";
import Image from 'next/image';
import StarIcon from "../../public/Assets/Solutions/Chair.svg";
import Calender from "../../public/Assets/Solutions/Calender.svg";
import Sanitizer from "../../public/Assets/Solutions/Sanitizer.svg";
import Car from "../../public/Assets/Solutions/Car.svg";
import Visitor from "../../public/Assets/Solutions/Visitor.svg";
import Meeting from "../../public/Assets/Solutions/Meeting.svg";
import Wifi from "../../public/Assets/Solutions/Wifi.svg";
import Record from "../../public/Assets/Solutions/Record.svg";
import Printer from "../../public/Assets/Solutions/Printer.svg";
import Networks from "../../public/Assets/Solutions/Networks.svg";
import Cafeteria from "../../public/Assets/Solutions/Cafeteria.svg";
import Location from "../../public/Assets/Solutions/Location.svg";

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
        },        
        {
            "image": <Car/>,
            "heading": "Two / Four Wheeler Parking",
            "about": "Convenient parking for two/four wheelers."
        },
        {
            "image": <Visitor/>,
            "heading": "Visitor Management",
            "about": "Efficient and secure visitor management."
        },
        {
            "image": <Meeting/>,
            "heading": "Meeting Room Credits",
            "about": "Earn credits for meeting room bookings."
        },
        {
            "image": <Wifi/>,
            "heading": "Fast, Secure, Unlimited Wi-Fi",
            "about": "Fast, secure, and unlimited Wi-Fi access."
        },
        {
            "image": <Record/>,
            "heading": "Attendance Record On Demand",
            "about": "On-demand access to attendance records."
        },
        {
            "image": <Printer/>,
            "heading": "Printer and Scanner",
            "about": "Convenient access to printer and scanner."
        },
        {
            "image": <Networks/>,
            "heading": "Network Connected",
            "about": "Seamlessly connected to secure networks."
        },
        {
            "image": <Cafeteria/>,
            "heading": "Cafeteria - Tea, Coffee & Snacks",
            "about": "Enjoy tea, coffee, and snacks daily."
        },
        {
            "image": <Location/>,
            "heading": "Virtual Business Address",
            "about": "Professional virtual business address services."
        }                        
    ]
  return (
    <div className={styles.main}>
        <div className={styles.content}>
            <div className={styles.lineContent}>
            <div className={styles.line}></div>
            <p className={styles.lineTag}>Why Choose Us</p>
            </div>
            <h1 className={styles.header}>Discover our <br /> <span className={styles.textOrange}>CoWorking</span> Solutions</h1>

            <div className={styles.gridContainer}>
                {Solutions.map((solution,i)=>{
                    return(
                        <div key={i} className={styles.itemContainer}>
                            <div className={styles.svgContainer}>
                             {solution.image}
                            <div className={styles.star}><Image src="/star.png" alt='star' height="30" width="30"/></div>
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
