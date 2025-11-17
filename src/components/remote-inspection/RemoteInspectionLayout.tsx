"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./RemoteInspectionLayout.module.css";

interface RemoteInspectionLayoutProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export default function RemoteInspectionLayout({
  activeMenu,
  setActiveMenu,
}: RemoteInspectionLayoutProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    {
      title: "실시간 피크전력 모니터링",
      href: "/remote-inspection?menu=실시간 피크전력 모니터링",
    },
    {
      title: "배전반 차단기별 전력관리 모니터링",
      href: "/remote-inspection?menu=배전반 차단기별 전력관리 모니터링",
    },
    {
      title: "차단기별 전기 화재 안전 모니터링",
      href: "/remote-inspection?menu=차단기별 전기 화재 안전 모니터링",
    },
    {
      title: "위험성 판단 & 2차 사고 예방 모니터링",
      href: "/remote-inspection?menu=위험성 판단 %26 2차 사고 예방 모니터링",
    },
    {
      title: "에너지 절감 운영매뉴얼 제공",
      href: "/remote-inspection?menu=에너지 절감 운영매뉴얼 제공",
    },
    {
      title: "전기안전 직무고시 원격계측 / 자동 리포트 생성",
      href: "/remote-inspection?menu=전기안전 직무고시 원격계측 / 자동 리포트 생성",
    },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>원격점검/리포트생성</h1>
        <p className={styles.subtitle}>
          실시간 모니터링으로 안전하고 효율적인 전력 관리를 실현합니다.
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
            <span className={styles.navText}>원격점검/리포트생성</span>
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
