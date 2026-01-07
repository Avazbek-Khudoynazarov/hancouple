"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./IntroductionLayout.module.css";
import { useLanguage } from "@/context/LanguageContext";

interface IntroductionLayoutProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

const menuItemsKor = [
  { title: "인사말", key: "인사말", href: "/introduction?menu=인사말" },
  { title: "연혁", key: "연혁", href: "/introduction?menu=연혁" },
  { title: "비전", key: "비전", href: "/introduction?menu=비전" },
  { title: "인증특허", key: "인증특허", href: "/introduction?menu=인증특허" },
  {
    title: "오시는 길",
    key: "오시는 길",
    href: "/introduction?menu=오시는 길",
  },
];

const menuItemsEng = [
  { title: "Greeting", key: "인사말", href: "/introduction?menu=인사말" },
  { title: "History", key: "연혁", href: "/introduction?menu=연혁" },
  { title: "Vision", key: "비전", href: "/introduction?menu=비전" },
  {
    title: "Certifications & Patents",
    key: "인증특허",
    href: "/introduction?menu=인증특허",
  },
  { title: "Location", key: "오시는 길", href: "/introduction?menu=오시는 길" },
];

const menuTitleMap: { [key: string]: string } = {
  인사말: "Greeting",
  연혁: "History",
  비전: "Vision",
  인증특허: "Certifications & Patents",
  "오시는 길": "Location",
};

export default function IntroductionLayout({
  activeMenu,
  setActiveMenu,
}: IntroductionLayoutProps) {
  const { language } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = language === "KOR" ? menuItemsKor : menuItemsEng;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getDisplayMenu = (menu: string) => {
    if (language === "ENG") {
      return menuTitleMap[menu] || menu;
    }
    return menu;
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>
          {language === "KOR" ? "회사소개" : "About Us"}
        </h1>
        <p className={styles.subtitle}>
          {language === "KOR"
            ? "(주)네트워크코리아는 산업종사의 디지털 문화 발전에 기여합니다."
            : "Network Korea contributes to the growth of a digitally driven culture that prioritizes people."}
        </p>
      </div>

      <div className={styles.bottomNav}>
        <div className={styles.navContainer}>
          <div className={styles.navLeft}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "15px",
              }}>
              <div className={styles.divider}></div>
              <Link href="/" className={styles.homeIcon}>
                <img src="/assets/introduction/home.svg" alt="Home" />
              </Link>
              <div className={styles.divider}></div>
              <span className={styles.navText}>
                {language === "KOR" ? "회사소개" : "About Us"}
              </span>
            </div>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.navRight}>
            <button className={styles.dropdownToggle} onClick={toggleDropdown}>
              <span className={styles.currentMenu}>
                {getDisplayMenu(activeMenu)}
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}>
                <img
                  src="/assets/introduction/arrow.svg"
                  alt="Dropdown"
                  className={`${styles.arrowIcon} ${
                    isDropdownOpen ? styles.arrowOpen : ""
                  }`}
                />
                <div className={styles.divider}></div>
              </div>
            </button>

            {isDropdownOpen && (
              <div className={styles.dropdown}>
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`${styles.dropdownItem} ${
                      activeMenu === item.key ? styles.active : ""
                    }`}
                    onClick={() => {
                      setActiveMenu(item.key);
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
