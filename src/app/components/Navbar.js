"use client"; // This line is crucial!

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState } from "react";
// import {  FaBars } from 'react-icons/fa'; // นำเข้าไอคอนจาก Font Awesome

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className={styles.navbar}>
      <div
        className={`${styles.topnav} ${isNavExpanded ? styles.responsive : ""}`}
        id="myTopnav"
      >
        <Link href="/" className={styles.active}>
          KPPMCH
        </Link>
        {/* <Link href="/tablekppmch">ตารางออกตรวจ</Link>
        <Link href="/table2">ตารางการให้บริการแพทย์แผนไทย</Link>
        <Link href="/table3">ตารางการให้บริการแพทย์แผนไทย</Link>
        */}
        {/* <a
          href="javascript:void(0);"
          className={styles.icon}
          onClick={toggleNavbar}
        >
          <FaBars size={20} />
        </a> */}
      </div>
    </nav>
  );
}
