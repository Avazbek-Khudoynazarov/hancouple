"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./SupportLayout.module.css";

export default function SupportLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { title: "문의하기", isStatic: false },
    { title: "설치/적용 사례", isStatic: true },
    { title: "Q&A", isStatic: true },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>고객지원</h1>
        <p className={styles.subtitle}>
          ㈜네트워크코리아는 사람중심의 디지털 문화 발전에 기여합니다.
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
            <span className={styles.navText}>고객지원</span>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.navRight}>
            <button className={styles.dropdownToggle} onClick={toggleDropdown}>
              <span className={styles.currentMenu}>문의하기</span>
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
                  <span
                    key={index}
                    className={`${styles.dropdownItem} ${
                      item.title === "문의하기" ? styles.active : ""
                    } ${item.isStatic ? styles.static : ""}`}
                    onClick={() => {
                      if (!item.isStatic) {
                        setIsDropdownOpen(false);
                      }
                    }}>
                    {item.title}
                  </span>
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
