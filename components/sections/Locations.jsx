'use client'
import React from 'react'
import styles from "../../styles/modules/locations.module.scss";
import OrangeButton from '../OrangeButton';
import Arrow from "../../public/Assets/Locations-arrow.svg";
import Image from 'next/image';
import Line from "@/public/Assets/Line.svg"


export default function Locations() {
  const locations = [
    {
      image :"/Elysium.jpg",
      name:"City Square",
      link:"https://maps.app.goo.gl/rwzKYWyhaia4vwst5"
    },
    {
      image :"/Sanhasa.jpeg",
      name:"Sanhasa Square",
      link:"https://maps.app.goo.gl/284NcUXZaFNe4cC57"
    },
    {
      image :"/Mapa.jpeg",
      name:"MAPA Centre",
      link:"https://maps.app.goo.gl/gmgNcLkSyFbe5yPY6"
    },
    {
      image :"/Elysium.jpg",
      name:"Elysium Towers",
      link:"https://maps.app.goo.gl/6eup3TQsyP4pMdCY6"
    },
  ];

  const handleClick = (link)=>{
    window.open(link,'_blank',"noopener,noreferrer");
  };

  return (
    <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.headingContainer}>
              <div>
                <div className={styles.lineContent}>
                 <>
                  <Line/> 
                  </>
                  <p className={styles.lineTag}>Our Locations</p>
                </div>
                  <h1 className={styles.header}>Visit Our <br /><span className={styles.textOrange}>CoWorking Space</span> Location</h1>
              </div>
              <div className={styles.btnContainer}>
                <OrangeButton text="Visit All Locations"/>
              </div>
          </div>

          <div className={styles.itemContainer}>
            {locations.map((location,i)=>{
              return(
                <div className={styles.item} key={i}>
                  <div className={styles.imgContainer}>
                    <Image src={location.image} alt={location.name} height="400" width="400"/>
                  </div>
                  <div className={styles.location}>
                    <div><h2>{location.name}</h2></div>
                    <div className={styles.arrow} onClick={()=>handleClick(location.link)}>
                      <Arrow className={styles.arrowSvg}/>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    </div>
  )
}
