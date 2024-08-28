import React from 'react'
import styles from "../styles/modules/navbar.module.scss";
import Image from 'next/image';

export default function Navbar() {
    const navItems = [
        { name: "Home",link:""},
        { name: "Services",link:""},
        { name: "Locations",link:""},
        { name: "About Us",link:""},
        { name: "Contact Us",link:""}
    ]
  return (
    <div className={styles.navbar}>
            <Image src="/logo.svg" alt="koworkz-logo" height="80" width="150"/>
        <div className={styles.itemsWrapper}>
            <div className={styles.items}>
                {navItems.map((item,i)=>{
                    return(
                        <p key={i}>{item.name}</p>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
