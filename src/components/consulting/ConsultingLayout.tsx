"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./ConsultingLayout.module.css";
import { useLanguage } from "@/context/LanguageContext";

const menuItemsKor = [
  {
    title: "서비스 안내",
    href: "/assets/service-info.html",
    openInNewTab: true,
  },
  {
    title: "온라인 무료컨설팅",
    href: "/assets/online-consulting.html",
    openInNewTab: true,
  },
  { title: "결과 제공", href: "/consulting?menu=결과 제공", isActive: true },
];

const menuItemsEng = [
  {
    title: "Service Information",
    href: "/assets/service-info.html",
    openInNewTab: true,
  },
  {
    title: "Free Online Consulting",
    href: "/assets/online-consulting.html",
    openInNewTab: true,
  },
  { title: "Results Provided", href: "/consulting?menu=결과 제공", isActive: true },
];

export default function ConsultingLayout() {
  const { language } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = language === "KOR" ? menuItemsKor : menuItemsEng;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>
          {language === "KOR"
            ? "체계적인 전기요금 컨설팅"
            : "Systematic Electricity Bill Consulting"}
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
                {language === "KOR"
                  ? "체계적인 전기요금 컨설팅"
                  : "Systematic Electricity Bill Consulting"}
              </span>
            </div>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.navRight}>
            <button className={styles.dropdownToggle} onClick={toggleDropdown}>
              <span className={styles.currentMenu}>
                {language === "KOR" ? "결과 제공" : "Results Provided"}
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
