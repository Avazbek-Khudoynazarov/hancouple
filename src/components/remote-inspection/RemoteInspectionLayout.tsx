"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./RemoteInspectionLayout.module.css";
import { useLanguage } from "@/context/LanguageContext";

interface RemoteInspectionLayoutProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

const menuItemsKor = [
  {
    title: "실시간 피크전력 모니터링",
    key: "실시간 피크전력 모니터링",
    href: "/remote-inspection?menu=실시간 피크전력 모니터링",
  },
  {
    title: "배전반 차단기별 전력관리 모니터링",
    key: "배전반 차단기별 전력관리 모니터링",
    href: "/remote-inspection?menu=배전반 차단기별 전력관리 모니터링",
  },
  {
    title: "차단기별 전기 화재 안전 모니터링",
    key: "차단기별 전기 화재 안전 모니터링",
    href: "/remote-inspection?menu=차단기별 전기 화재 안전 모니터링",
  },
  {
    title: "위험성 판단 & 2차 사고 예방 모니터링",
    key: "위험성 판단 & 2차 사고 예방 모니터링",
    href: "/remote-inspection?menu=위험성 판단 %26 2차 사고 예방 모니터링",
  },
  {
    title: "에너지 절감 운영매뉴얼 제공",
    key: "에너지 절감 운영매뉴얼 제공",
    href: "/remote-inspection?menu=에너지 절감 운영매뉴얼 제공",
  },
  {
    title: "전기안전 직무고시 원격계측 / 자동 리포트 생성",
    key: "전기안전 직무고시 원격계측 / 자동 리포트 생성",
    href: "/remote-inspection?menu=전기안전 직무고시 원격계측 / 자동 리포트 생성",
  },
];

const menuItemsEng = [
  {
    title: "Real-time Peak Power Monitoring",
    key: "실시간 피크전력 모니터링",
    href: "/remote-inspection?menu=실시간 피크전력 모니터링",
  },
  {
    title: "Breaker-level Power Management Monitoring",
    key: "배전반 차단기별 전력관리 모니터링",
    href: "/remote-inspection?menu=배전반 차단기별 전력관리 모니터링",
  },
  {
    title: "Breaker-level Electrical Fire Safety Monitoring",
    key: "차단기별 전기 화재 안전 모니터링",
    href: "/remote-inspection?menu=차단기별 전기 화재 안전 모니터링",
  },
  {
    title: "Risk Assessment & Secondary Accident Prevention",
    key: "위험성 판단 & 2차 사고 예방 모니터링",
    href: "/remote-inspection?menu=위험성 판단 %26 2차 사고 예방 모니터링",
  },
  {
    title: "Energy Saving Manual",
    key: "에너지 절감 운영매뉴얼 제공",
    href: "/remote-inspection?menu=에너지 절감 운영매뉴얼 제공",
  },
  {
    title: "Electrical Safety Regulation Remote Monitoring / Auto Reports",
    key: "전기안전 직무고시 원격계측 / 자동 리포트 생성",
    href: "/remote-inspection?menu=전기안전 직무고시 원격계측 / 자동 리포트 생성",
  },
];

const menuTitleMap: { [key: string]: string } = {
  "실시간 피크전력 모니터링": "Real-time Peak Power Monitoring",
  "배전반 차단기별 전력관리 모니터링":
    "Breaker-level Power Management Monitoring",
  "차단기별 전기 화재 안전 모니터링":
    "Breaker-level Electrical Fire Safety Monitoring",
  "위험성 판단 & 2차 사고 예방 모니터링":
    "Risk Assessment & Secondary Accident Prevention",
  "에너지 절감 운영매뉴얼 제공": "Energy Saving Manual",
  "전기안전 직무고시 원격계측 / 자동 리포트 생성":
    "Electrical Safety Regulation Remote Monitoring / Auto Reports",
};

export default function RemoteInspectionLayout({
  activeMenu,
  setActiveMenu,
}: RemoteInspectionLayoutProps) {
  const { language } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = language === "KOR" ? menuItemsKor : menuItemsEng;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getDisplayMenu = (menu: string) => {
    if (language === "ENG") {
      const engTitle = menuTitleMap[menu] || menu;
      // Add line breaks for long menu titles
      if (
        engTitle ===
        "Electrical Safety Regulation Remote Monitoring / Auto Reports"
      ) {
        return (
          <>
            Electrical Safety Regulation Remote
            <br />
            Monitoring / Auto Reports
          </>
        );
      }
      if (engTitle === "Risk Assessment & Secondary Accident Prevention") {
        return (
          <>
            Risk Assessment & Secondary
            <br />
            Accident Prevention
          </>
        );
      }
      if (engTitle === "Breaker-level Electrical Fire Safety Monitoring") {
        return (
          <>
            Breaker-level Electrical Fire
            <br />
            Safety Monitoring
          </>
        );
      }
      if (engTitle === "Breaker-level Power Management Monitoring") {
        return (
          <>
            Breaker-level Power Management
            <br />
            Monitoring
          </>
        );
      }
      return engTitle;
    }
    return menu;
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>
          {language === "KOR"
            ? "원격점검/리포트생성"
            : "Remote Inspection / Report"}
        </h1>
        <p className={styles.subtitle}>
          {language === "KOR"
            ? "실시간 모니터링으로 안전하고 효율적인 전력 관리를 실현합니다."
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
                  ? "원격점검/리포트생성"
                  : "Remote Inspection / Report"}
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
