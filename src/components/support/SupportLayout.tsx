"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./SupportLayout.module.css";
import { useLanguage } from "@/context/LanguageContext";

interface SupportLayoutProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

const menuItemsKor = [
  { title: "문의하기", key: "문의하기", href: "/support?menu=문의하기" },
  {
    title: "설치/적용 사례",
    key: "설치/적용 사례",
    href: "/support?menu=설치/적용 사례",
  },
  { title: "Q&A", key: "Q&A", href: "/support?menu=Q%26A" },
];

const menuItemsEng = [
  { title: "Contact Us", key: "문의하기", href: "/support?menu=문의하기" },
  {
    title: "Case Studies",
    key: "설치/적용 사례",
    href: "/support?menu=설치/적용 사례",
  },
  { title: "Q&A", key: "Q&A", href: "/support?menu=Q%26A" },
];

const menuTitleMap: { [key: string]: string } = {
  문의하기: "Contact Us",
  "설치/적용 사례": "Case Studies",
  "Q&A": "Q&A",
};

export default function SupportLayout({
  activeMenu,
  setActiveMenu,
}: SupportLayoutProps) {
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
          {language === "KOR" ? "고객지원" : "Support"}
        </h1>
        <p className={styles.subtitle}>
          {language === "KOR"
            ? "㈜네트워크코리아는 사람중심의 디지털 문화 발전에 기여합니다."
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
                {language === "KOR" ? "고객지원" : "Support"}
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
