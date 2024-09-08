'use client'
import React, { useState } from 'react';
import styles from '../styles/modules/navbar.module.scss';
import Image from 'next/image';
import useIsMobile from '@/CustomHooks/IsMobile';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

export default function Navbar({navItems}) {
  const isMobile = useIsMobile();
  const [isOpen,setIsOpen] = useState(false);
  const router = useRouter();

  const handleClick = ()=>{
    setIsOpen((cur)=>!cur);
  }
  const handleNav = ()=>{
    if( router.pathname == "/") return;
    router.push("/");
  }

  return (
    <div className={styles.navbar}>
      <Image
        src="/logo.svg"
        alt="koworkz-logo"
        height={80}
        width={150}
        className={styles.logo}
        onClick={handleNav}
        style={{cursor:"pointer"}}
      />
      {isMobile ? (
        <>
        <div className={styles.svgWrapper} onClick={handleClick}>
          <svg
            width="34px"
            height="34px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 5.4498C0 2.4399 2.4399 0 5.4498 0C8.4597 0 10.8995 2.4399 10.8995 5.4498C10.8995 8.4597 8.4596 10.8995 5.4498 10.8995C2.44 10.8995 0 8.4596 0 5.4498Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.6201 18.0703C12.6201 15.0605 15.06 12.6205 18.0699 12.6205C21.0796 12.6205 23.5196 15.0604 23.5196 18.0703C23.5196 21.08 21.0796 23.52 18.0699 23.52C15.0601 23.52 12.6201 21.08 12.6201 18.0703Z"
              fill="white"
            />
            <path
              d="M12.9355 5.292C12.9355 2.7973 12.9355 1.55 13.7105 0.775C14.4855 0 15.7329 0 18.2275 0C20.7221 0 21.9695 0 22.7445 0.775C23.5195 1.55 23.5195 2.7973 23.5195 5.292C23.5195 7.7867 23.5195 9.034 22.7445 9.809C21.9695 10.584 20.7222 10.584 18.2275 10.584C15.7328 10.584 14.4855 10.584 13.7105 9.809C12.9355 9.034 12.9355 7.7867 12.9355 5.292Z"
              fill="url(#paint0_linear_60_39)"
            />
            <path
              d="M0 18.292C0 15.7973 5.96046e-07 14.55 0.775001 13.775C1.55 13 2.7974 13 5.292 13C7.7866 13 9.034 13 9.809 13.775C10.584 14.55 10.584 15.7973 10.584 18.292C10.584 20.7867 10.584 22.034 9.809 22.809C9.034 23.584 7.7867 23.584 5.292 23.584C2.7973 23.584 1.55 23.584 0.775001 22.809C5.96046e-07 22.034 0 20.7867 0 18.292Z"
              fill="url(#paint1_linear_60_39)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_60_39"
                x1="14.5"
                y1="-0.5"
                x2="19.5"
                y2="10.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9B218" />
                <stop offset="1" stopColor="#F15B59" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_60_39"
                x1="1.56445"
                y1="12.5"
                x2="6.56445"
                y2="23.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9B218" />
                <stop offset="1" stopColor="#F15B59" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {isOpen && (
            <div className={styles.dropDown}  onClick={()=>(setIsOpen(false))}>
                {navItems.map((item,i)=>(
                    <p key={i} className={styles.dropDownItem}>{item.name}</p>
                ))}
            </div>
        )
        }
        </>
      ) : (
        <div className={styles.itemsWrapper}>
          <div className={styles.items}>
            {navItems.map((item, i) => (
            <Link href={item.link} key={i} className={styles.link}>
            {item.name}
            </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
