"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./OperationLayout.module.css";
import { useLanguage } from "@/context/LanguageContext";

interface OperationLayoutProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

const menuItemsKor = [
  {
    title: "요양시설 · 장애인복지시설",
    key: "요양시설 · 장애인복지시설",
    href: "/operation?menu=요양시설 · 장애인복지시설",
  },
  {
    title: "병원 · 의료기관",
    key: "병원 · 의료기관",
    href: "/operation?menu=병원 · 의료기관",
  },
  {
    title: "제조업 공장",
    key: "제조업 공장",
    href: "/operation?menu=제조업 공장",
  },
  {
    title: "초 ·중 ·고 · 대학교",
    key: "초 ·중 ·고 · 대학교",
    href: "/operation?menu=초 ·중 ·고 · 대학교",
  },
  {
    title: "전통시장 · 소상공인",
    key: "전통시장 · 소상공인",
    href: "/operation?menu=전통시장 · 소상공인",
  },
  {
    title: "대형 쇼핑몰 · 다중이용시설",
    key: "대형 쇼핑몰 · 다중이용시설",
    href: "/operation?menu=대형 쇼핑몰 · 다중이용시설",
  },
  {
    title: "캠핑장 · 야영장 시설",
    key: "캠핑장 · 야영장 시설",
    href: "/operation?menu=캠핑장 · 야영장 시설",
  },
  {
    title: "전기차 충전시설",
    key: "전기차 충전시설",
    href: "/operation?menu=전기차 충전시설",
  },
];

const menuItemsEng = [
  {
    title: "Care Facilities",
    key: "요양시설 · 장애인복지시설",
    href: "/operation?menu=요양시설 · 장애인복지시설",
  },
  {
    title: "Hospitals ",
    key: "병원 · 의료기관",
    href: "/operation?menu=병원 · 의료기관",
  },
  {
    title: "Manufacturing Plants",
    key: "제조업 공장",
    href: "/operation?menu=제조업 공장",
  },
  {
    title: "Schools & Universities",
    key: "초 ·중 ·고 · 대학교",
    href: "/operation?menu=초 ·중 ·고 · 대학교",
  },
  {
    title: "Traditional Markets & SMEs",
    key: "전통시장 · 소상공인",
    href: "/operation?menu=전통시장 · 소상공인",
  },
  {
    title: "Shopping Malls & Public Facilities",
    key: "대형 쇼핑몰 · 다중이용시설",
    href: "/operation?menu=대형 쇼핑몰 · 다중이용시설",
  },
  {
    title: "Campgrounds & Camping Site Facilities",
    key: "캠핑장 · 야영장 시설",
    href: "/operation?menu=캠핑장 · 야영장 시설",
  },
  {
    title: "EV Charging Stations",
    key: "전기차 충전시설",
    href: "/operation?menu=전기차 충전시설",
  },
];

const menuTitleMap: { [key: string]: string } = {
  "요양시설 · 장애인복지시설": "Care Facilities",
  "병원 · 의료기관": "Hospitals & Medical Institutions",
  "제조업 공장": "Manufacturing Factories",
  "초 ·중 ·고 · 대학교": "Schools & Universities",
  "전통시장 · 소상공인": "Traditional Markets & Small Businesses",
  "대형 쇼핑몰 · 다중이용시설": "Shopping Malls & Public Facilities",
  "캠핑장 · 야영장 시설": "Campgrounds & Camping Facilities",
  "전기차 충전시설": "EV Charging Stations",
};

export default function OperationLayout({
  activeMenu,
  setActiveMenu,
}: OperationLayoutProps) {
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
          {language === "KOR"
            ? "업종별 운영방안 제안"
            : "Industry-Specific Operation Plan Proposals"}
        </h1>
        <p className={styles.subtitle}>
          {language === "KOR"
            ? "산업별 맞춤형 전력 관리 솔루션을 제공합니다."
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
                  ? "업종별 운영방안 제안"
                  : "Industry-Specific Operation Plan Proposals"}
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
