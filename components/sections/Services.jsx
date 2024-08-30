'use client';
import React, { useState } from 'react';
import styles from "../../styles/modules/services.module.scss";

export default function Services() {
  // Set up state for toggling all items
  const [isOpen, setIsOpen] = useState(null); // Using `null` to mean no item is open

  const Services = [
    {
      name: "Private Offices",
      tags: ["Extensive Privacy", "Flexible Lease", "Premium Amenities"],
      content: "Our private offices provide the ideal mix of privacy and collaboration. Perfect for teams of any size, these fully-equipped spaces offer a secure and quiet environment, complete with flexible lease options. You'll have 24/7 access, high-speed internet, and premium amenities designed to enhance your productivity."
    },
    {
      name: "Services",
      tags: ["Customizable Suites", "Growing Teams", "Flexible Terms"],
      content: "Elevate your business with spacious, customizable office suites designed for growing teams. Enjoy the privacy of your own office along with shared amenities like conference rooms and break areas, all within a professional environment with flexible terms."
    },
    {
      name: "Assorted Cabins",
      tags: ["Cozy Nooks", "Private Retreats", "Collaborative Spaces"],
      content: "Discover a range of assorted cabins tailored to meet diverse business needs. From cozy nooks perfect for focused work to private retreats for confidential meetings, and collaborative spaces designed for team brainstorming sessions, our cabins offer a versatile environment to enhance productivity and creativity."
    },
    {
      name: "Conference Rooms",
      tags: ["State-of-the-Art Facilities", "Flexible Layouts", "Seamless Connectivity"],
      content: "Experience top-notch conference rooms equipped with state-of-the-art facilities. Choose from flexible layouts that can be tailored to your event’s needs and benefit from seamless connectivity to ensure smooth presentations and discussions. Our conference rooms provide the perfect setting for productive meetings and successful events."
    },
    {
      name: "Dedicated Seats",
      tags: ["Reserved Workstations", "Personalized Workspaces", "Consistent Environment"],
      content: "Optimize your workday with dedicated seats that offer reserved workstations for uninterrupted focus. Enjoy personalized workspaces tailored to your preferences and benefit from a consistent environment that fosters productivity and stability. Ideal for professionals seeking a reliable and dedicated spot in a dynamic co-working space."
    },
    {
      name: "Day Pass",
      tags: ["Flexible Access", "One-Day Usage", "Exclusive Amenities"],
      content: "Take advantage of our Day Pass for flexible access to all our facilities for a full day. Enjoy one-day usage of our workspace, including exclusive amenities such as high-speed internet, meeting rooms, and relaxation areas. Perfect for those needing temporary access or a trial experience in a professional co-working environment."
    }
  ];
  

  const handleToggle = (index) => {
    setIsOpen(isOpen === index ? null : index); 
  };

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.lineContent}>
          <div className={styles.line}></div>
          <p className={styles.lineTag}>Our Services</p>
        </div>
        <h1 className={styles.header}>Discover our <br /> CoWorking Solutions</h1>

        {Services.map((service, i) => (
          <div className={styles.mainDiv} key={i}>
            <h2 className={styles.num}>0{i + 1}.</h2>
            {/* name */}
            <div className={styles.contentContainer}>
              <h2 className={styles.name}>{service.name}</h2>

              {/* tags */}
              <div className={styles.tagContainer}>
                {service.tags.map((tag, index) => (
                  <p className={styles.tag} key={index}>{tag}</p>
                ))}
              </div>

              {isOpen === i && (
                <>
                  <p>{service.content}</p>
                  <div className={styles.imgContainer}>
                    {/* <Image/> */}
                  </div>
                </>
              )}
            </div>
            {/* dropdown */}
            <svg 
              onClick={() => handleToggle(i)} 
              xmlns="http://www.w3.org/2000/svg" 
              height="34px" 
              viewBox="0 -960 960 960" 
              width="34px" 
              fill="#e8eaed"
              className={`${styles.rotate} ${isOpen === i ? styles.rotated : ''}`}
            >
              <path d="m480-360 160-160H320l160 160Zm0 280q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
