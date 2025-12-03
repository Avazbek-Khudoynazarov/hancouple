"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface SubItem {
  title: string;
  subtitle?: string;
  href: string;
}

interface NavItem {
  title: string;
  href: string;
  children?: SubItem[];
}

const navDataKor: NavItem[] = [
  {
    title: "회사소개",
    href: "/introduction",
    children: [
      { title: "인사말", href: "/introduction?menu=인사말" },
      { title: "연혁", href: "/introduction?menu=연혁" },
      { title: "비전", href: "/introduction?menu=비전" },
      { title: "인증특허", href: "/introduction?menu=인증특허" },
      { title: "오시는 길", href: "/introduction?menu=오시는 길" },
    ],
  },
  {
    title: "원격점검/리포트생성",
    href: "/remote-inspection",
    children: [
      {
        title: "실시간 피크전력 모니터링",
        subtitle: "요금 폭탄 방지",
        href: "/remote-inspection?menu=실시간 피크전력 모니터링",
      },
      {
        title: "배전반 차단기별 전력관리 모니터링",
        subtitle: "",
        href: "/remote-inspection?menu=배전반 차단기별 전력관리 모니터링",
      },
      {
        title: "차단기별 전기 화재 안전 모니터링",
        subtitle: "누전, 과부하, 온도 이상 즉시 차단",
        href: "/remote-inspection?menu=차단기별 전기 화재 안전 모니터링",
      },
      {
        title: "위험성 판단 & 2차 사고 예방 모니터링",
        subtitle: "전원차점으로 인한 2차 사고방생",
        href: "/remote-inspection?menu=위험성 판단 & 2차 사고 예방 모니터링",
      },
      {
        title: "에너지 절감 운영매뉴얼 제공",
        subtitle: "전단 후 절감 실행 가이드",
        href: "/remote-inspection?menu=에너지 절감 운영매뉴얼 제공",
      },
      {
        title: "전기안전 직무고시 원격제출 / 자동 리포트 생성",
        subtitle: "",
        href: "/remote-inspection?menu=전기안전 직무고시 원격계측 / 자동 리포트 생성",
      },
    ],
  },
  {
    title: "업종별 운영방안 제안",
    href: "/operation",
    children: [
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
    ],
  },
  {
    title: "체계적인 전기요금 컨설팅",
    href: "/consulting",
    children: [
      {
        title: "서비스 안내",
        subtitle: "고지서 역산, 계약전력 최적화",
        href: "/consulting/service",
      },
      {
        title: "온라인 무료컨설팅",
        subtitle: "최근 3개월 전기요금고지서",
        href: "/consulting/online",
      },
      {
        title: "결과 제공",
        subtitle: "피크 원인·낭비전력 진단 요약 리포트",
        href: "/consulting/results",
      },
    ],
  },
  {
    title: "고객지원",
    href: "/support",
    children: [
      {
        title: "문의하기",
        subtitle: "제품·솔루션 선택 가능, 파일첨부",
        href: "/support/contact",
      },
      { title: "설치/적용 사례", href: "/support/cases" },
      {
        title: "Q&A",
        subtitle: "직무고시 대응, 자동보고 활용법",
        href: "/support/qna",
      },
    ],
  },
];

const navDataEng: NavItem[] = [
  {
    title: "Company",
    href: "/introduction",
    children: [
      { title: "Greeting", href: "/introduction?menu=인사말" },
      { title: "History", href: "/introduction?menu=연혁" },
      { title: "Vision", href: "/introduction?menu=비전" },
      {
        title: "Certifications & Patents",
        href: "/introduction?menu=인증특허",
      },
      { title: "Location", href: "/introduction?menu=오시는 길" },
    ],
  },
  {
    title: "Remote Inspection/Reports",
    href: "/remote-inspection",
    children: [
      {
        title: "Real-time Peak Power Monitoring",
        subtitle: "Prevent Bill Shock",
        href: "/remote-inspection?menu=실시간 피크전력 모니터링",
      },
      {
        title: "Circuit Breaker Power Management",
        subtitle: "",
        href: "/remote-inspection?menu=배전반 차단기별 전력관리 모니터링",
      },
      {
        title: "Electrical Fire Safety Monitoring",
        subtitle: "Instant shutdown on leakage, overload, temp. abnormality",
        href: "/remote-inspection?menu=차단기별 전기 화재 안전 모니터링",
      },
      {
        title: "Risk Assessment & Secondary Accident Prevention",
        subtitle: "Prevent secondary accidents from power issues",
        href: "/remote-inspection?menu=위험성 판단 %26 2차 사고 예방 모니터링",
      },
      {
        title: "Energy Saving Operation Manual",
        subtitle: "Before & after savings execution guide",
        href: "/remote-inspection?menu=에너지 절감 운영매뉴얼 제공",
      },
      {
        title: "Remote Submission / Auto Report Generation",
        subtitle: "",
        href: "/remote-inspection?menu=전기안전 직무고시 원격계측 / 자동 리포트 생성",
      },
    ],
  },
  {
    title: "operation",
    href: "/operation",
    children: [
      {
        title: "Care Facilities · Welfare Centers",
        href: "/industry-solutions/care-facilities",
      },
      {
        title: "Hospitals · Medical Institutions",
        href: "/industry-solutions/medical",
      },
      {
        title: "Manufacturing Plants",
        href: "/industry-solutions/manufacturing",
      },
      {
        title: "Schools · Universities",
        href: "/industry-solutions/education",
      },
      {
        title: "Traditional Markets · Small Businesses",
        href: "/industry-solutions/small-business",
      },
      {
        title: "Shopping Malls · Multi-use Facilities",
        href: "/industry-solutions/shopping-mall",
      },
      {
        title: "Camping Sites · Facilities",
        href: "/industry-solutions/camping",
      },
    ],
  },
  {
    title: "Electricity Bill Consulting",
    href: "/consulting",
    children: [
      {
        title: "Service Information",
        subtitle: "Bill reverse calculation, contract power optimization",
        href: "/consulting/service",
      },
      {
        title: "Free Online Consulting",
        subtitle: "Last 3 months electricity bills",
        href: "/consulting/online",
      },
      {
        title: "Results Delivery",
        subtitle: "Peak cause & power waste diagnostic summary report",
        href: "/consulting/results",
      },
    ],
  },
  {
    title: "Customer Support",
    href: "/support",
    children: [
      {
        title: "Contact Us",
        subtitle: "Product/solution selection, file attachment available",
        href: "/support/contact",
      },
      { title: "Installation Cases", href: "/support/cases" },
      {
        title: "Q&A",
        subtitle: "Duty report response, auto-report usage",
        href: "/support/qna",
      },
    ],
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [language, setLanguage] = useState<"KOR" | "ENG">("KOR");
  const [dropdownPosition, setDropdownPosition] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<number | null>(
    null
  );
  const navItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const navData = language === "KOR" ? navDataKor : navDataEng;

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (index: number) => {
    setActiveDropdown(index);
    if (navItemRefs.current[index]) {
      const rect = navItemRefs.current[index]!.getBoundingClientRect();
      setDropdownPosition(rect.left);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleLanguage = (lang: "KOR" | "ENG") => {
    setLanguage(lang);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileExpandedItem(null);
  };

  const toggleMobileItem = (index: number) => {
    setMobileExpandedItem(mobileExpandedItem === index ? null : index);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.logo}>
          <img
            src="/assets/homepage/mainLogo2.svg"
            alt="NetWork Korea"
            className={styles.logoDefault}
          />
          <img
            src="/assets/homepage/mainLogo.svg"
            alt="NetWork Korea"
            className={styles.logoHover}
          />
        </Link>

        <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
          <MenuIcon />
        </button>

        <div className={styles.mainConNavLinks}>
          <div className={styles.navLinks}>
            {navData.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  navItemRefs.current[index] = el;
                }}
                className={styles.navItem}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}>
                <Link href={item.href} className={styles.navLink}>
                  {item.title}
                </Link>

                {item.children && activeDropdown === index && (
                  <div className={styles.dropdown}>
                    <div
                      className={styles.dropdownContent}
                      style={{ paddingLeft: `${dropdownPosition}px` }}>
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          className={styles.dropdownItem}>
                          <div className={styles.dropdownItemContent}>
                            <span className={styles.childTitle}>
                              {child.title}
                            </span>
                            {child.subtitle && (
                              <span className={styles.childSubtitle}>
                                {index === 1 && "→ "}
                                {child.subtitle}
                              </span>
                            )}
                          </div>
                          <div className={styles.childArrow}>
                            <img
                              src="/assets/homepage/childRight.svg"
                              alt="arrow"
                            />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.languageToggle}>
            <button
              className={`${styles.langButton} ${
                language === "KOR" ? styles.active : ""
              }`}
              onClick={() => toggleLanguage("KOR")}>
              KOR
            </button>
            <span className={styles.separator}>|</span>
            <button
              className={`${styles.langButton} ${
                language === "ENG" ? styles.active : ""
              }`}
              onClick={() => toggleLanguage("ENG")}>
              ENG
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`${styles.mobileMenu} ${
          mobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}>
        <div className={styles.mobileMenuHeader}>
          <Link
            href="/"
            className={styles.mobileLogo}
            onClick={toggleMobileMenu}>
            <img src="/assets/homepage/mainLogo2.svg" alt="NetWork Korea" />
          </Link>
          <button
            className={styles.mobileCloseButton}
            onClick={toggleMobileMenu}>
            <CloseIcon />
          </button>
        </div>

        <div className={styles.mobileMenuContent}>
          {navData.map((item, index) => (
            <div key={index} className={styles.mobileMenuItem}>
              <div
                className={styles.mobileMenuItemHeader}
                onClick={() => toggleMobileItem(index)}>
                <span>{item.title}</span>
                {item.children &&
                  (mobileExpandedItem === index ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  ))}
              </div>

              {item.children && mobileExpandedItem === index && (
                <div className={styles.mobileSubmenu}>
                  {item.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      href={child.href}
                      className={styles.mobileSubmenuItem}
                      onClick={toggleMobileMenu}>
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.mobileLanguageToggle}>
          <button
            className={`${styles.mobileLangButton} ${
              language === "KOR" ? styles.active : ""
            }`}
            onClick={() => toggleLanguage("KOR")}>
            KOR
          </button>
          <span className={styles.separator}>|</span>
          <button
            className={`${styles.mobileLangButton} ${
              language === "ENG" ? styles.active : ""
            }`}
            onClick={() => toggleLanguage("ENG")}>
            ENG
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={toggleMobileMenu} />
      )}
    </nav>
  );
}
