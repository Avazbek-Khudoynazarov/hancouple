"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./IntroductionLayout.module.css";

interface IntroductionLayoutProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function IntroductionLayout({
  activeMenu,
  setActiveMenu,
}: IntroductionLayoutProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { title: "인사말", href: "/introduction?menu=인사말" },
    { title: "연혁", href: "/introduction?menu=연혁" },
    { title: "비전", href: "/introduction?menu=비전" },
    { title: "인증특허", href: "/introduction?menu=인증특허" },
    { title: "오시는 길", href: "/introduction?menu=오시는 길" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>회사소개</h1>
        <p className={styles.subtitle}>
          (주)네트워크코리아는 산업종사의 디지털 문화 발전에 기여합니다.
        </p>
      </div>

      <div className={styles.bottomNav}>
        <div className={styles.navContainer}>
          <div className={styles.navLeft}>
            <div className={styles.divider}></div>
            <Link href="/" className={styles.homeIcon}>
              <img src="/assets/introduction/home.svg" alt="Home" />
            </Link>
            <div className={styles.divider}></div>
            <span className={styles.navText}>회사소개</span>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.navRight}>
            <button className={styles.dropdownToggle} onClick={toggleDropdown}>
              <span className={styles.currentMenu}>{activeMenu}</span>
              <img
                src="/assets/introduction/arrow.svg"
                alt="Dropdown"
                className={`${styles.arrowIcon} ${
                  isDropdownOpen ? styles.arrowOpen : ""
                }`}
              />
              <div className={styles.divider}></div>
            </button>

            {isDropdownOpen && (
              <div className={styles.dropdown}>
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`${styles.dropdownItem} ${
                      activeMenu === item.title ? styles.active : ""
                    }`}
                    onClick={() => {
                      setActiveMenu(item.title);
                      setIsDropdownOpen(false);
                    }}>
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.content}></div>
    </div>
  );
}
