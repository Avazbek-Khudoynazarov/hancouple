"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./ConsultingLayout.module.css";

export default function ConsultingLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { title: "서비스 안내", href: "/assets/service-info.html", openInNewTab: true },
    { title: "온라인 무료컨설팅", href: "/assets/online-consulting.html", openInNewTab: true },
    { title: "결과 제공", href: "/consulting?menu=결과 제공", isActive: true },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>체계적인 전기요금 컨설팅</h1>
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
            <span className={styles.navText}>체계적인 전기요금 컨설팅</span>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.navRight}>
            <button className={styles.dropdownToggle} onClick={toggleDropdown}>
              <span className={styles.currentMenu}>결과 제공</span>
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
                {menuItems.map((item, index) =>
                  item.openInNewTab ? (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.dropdownItem}
                      onClick={() => setIsDropdownOpen(false)}>
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      href={item.href}
                      className={`${styles.dropdownItem} ${
                        item.isActive ? styles.active : ""
                      }`}
                      onClick={() => setIsDropdownOpen(false)}>
                      {item.title}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.content}></div>
    </div>
  );
}
