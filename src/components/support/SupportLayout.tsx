"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./SupportLayout.module.css";

interface SupportLayoutProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function SupportLayout({ activeMenu, setActiveMenu }: SupportLayoutProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { title: "문의하기", isStatic: false },
    { title: "설치/적용 사례", isStatic: false },
    { title: "Q&A", isStatic: false },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = (item: { title: string; isStatic: boolean }) => {
    if (!item.isStatic) {
      setActiveMenu(item.title);
      router.push(`/support?menu=${encodeURIComponent(item.title)}`);
      setIsDropdownOpen(false);
    }
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
                  <span
                    key={index}
                    className={`${styles.dropdownItem} ${
                      item.title === activeMenu ? styles.active : ""
                    } ${item.isStatic ? styles.static : ""}`}
                    onClick={() => handleMenuClick(item)}>
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
