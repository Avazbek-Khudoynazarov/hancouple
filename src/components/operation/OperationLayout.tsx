"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./OperationLayout.module.css";

interface OperationLayoutProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function OperationLayout({
  activeMenu,
  setActiveMenu,
}: OperationLayoutProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    {
      title: "요양시설 · 장애인복지시설",
      href: "/operation?menu=요양시설 · 장애인복지시설",
    },
    { title: "병원 · 의료기관", href: "/operation?menu=병원 · 의료기관" },
    { title: "제조업 공장", href: "/operation?menu=제조업 공장" },
    { title: "초 ·중 ·고 · 대학교", href: "/operation?menu=초 ·중 ·고 · 대학교" },
    {
      title: "전통시장 · 소상공인",
      href: "/operation?menu=전통시장 · 소상공인",
    },
    {
      title: "대형 쇼핑몰 · 다중이용시설",
      href: "/operation?menu=대형 쇼핑몰 · 다중이용시설",
    },
    {
      title: "캠핑장 · 야영장 시설",
      href: "/operation?menu=캠핑장 · 야영장 시설",
    },
    {
      title: "전기차 충전시설",
      href: "/operation?menu=전기차 충전시설",
    },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>업종별 운영방안 제안</h1>
        <p className={styles.subtitle}>
          산업별 맞춤형 전력 관리 솔루션을 제공합니다.
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
            <span className={styles.navText}>업종별 운영방안 제안</span>
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
