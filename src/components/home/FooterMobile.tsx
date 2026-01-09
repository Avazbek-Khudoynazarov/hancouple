"use client";

import Link from "next/link";
import styles from "./FooterMobile.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function FooterMobile() {
  const { language } = useLanguage();

  return (
    <footer className={styles.footer}>
      {/* Mobile Navigation */}
      <div className={styles.topNav}>
        <nav className={styles.navContainer}>
          <Link href="/introduction" className={styles.navLink}>
            {language === "KOR" ? "회사소개" : "About Us"}
          </Link>
          <Link href="/remote-inspection" className={styles.navLink}>
            {language === "KOR"
              ? "원격점검/리포트생성"
              : "Remote Inspection/ Report"}
          </Link>
          <Link href="/operation" className={styles.navLink}>
            {language === "KOR"
              ? "업종별 운영방안 제안"
              : "Industry-Specific Operation Plan Proposals"}
          </Link>
          <Link href="/consulting" className={styles.navLink}>
            {language === "KOR"
              ? "체계적인 전기요금 컨설팅"
              : "Systematic Electricity Bill Consulting"}
          </Link>
          <Link href="/support" className={styles.navLink}>
            {language === "KOR" ? "고객지원" : "Support"}
          </Link>
        </nav>
      </div>

      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          {/* Logo and Naver */}
          <div className={styles.logoRow}>
            <img
              src={language === "KOR" ? "/assets/homepage/footer.svg" : "/assets/homepage/footerEng.svg"}
              alt={language === "KOR" ? "(주)네트워크코리아" : "Network Korea"}
              className={styles.mainLogo}
            />
            <Link href="https://blog.naver.com/network_korea01">
              <img
                src="/assets/homepage/naver.svg"
                alt="Naver Blog"
                className={styles.naverLogo}
              />
            </Link>
          </div>
          {/* Company Information */}
          <div className={styles.infoSection}>
            <div className={styles.infoLine}>
              <span className={styles.label}>
                {language === "KOR"
                  ? "통신판매업신고번호"
                  : "Mail-Order Sales Registration Number"}
              </span>
              <span className={styles.value}>
                {language === "KOR"
                  ? "제 2204-대구북구-00070호"
                  : "No. 2204-Daegu Buk-gu-00070"}
              </span>
            </div>
            <div className={styles.infoLine}>
              <span className={styles.label}>
                {language === "KOR" ? "대표" : "Representative"}
              </span>
              <span className={styles.value}>
                {language === "KOR" ? "신동환" : "Dong Hwan - Shin"}
              </span>
              <span className={styles.separator}>|</span>
              <span className={styles.label}>
                {language === "KOR" ? "주소" : "Address"}
              </span>
              <span className={styles.value}>
                {language === "KOR"
                  ? "대구광역시 북구 대천로9길 11-5"
                  : "11-5, Daecheon-ro 9-gil, Buk-gu, Daegu, Republic of Korea"}
              </span>
            </div>
          </div>

          <div>
            <div className={styles.infoLine}>
              <span className={styles.label}>Tel</span>
              <span className={styles.value}>053-326-0114</span>
              <span className={styles.separator}>|</span>
              <span className={styles.label}>E-mail</span>
              <span className={styles.value}>nk@networkkorea.co.kr</span>
            </div>

            <p className={styles.copyright}>
              {language === "KOR"
                ? "COPYRIGHT © 2025 ㈜네트워크코리아. ALL RIGHTS RESERVED."
                : "COPYRIGHT © 2025 ㈜Network Korea Co., Ltd ALL RIGHTS RESERVED."}
            </p>
          </div>
          {/* Partner Logos */}
          <div className={styles.partnerLogos}>
            <img
              src={language === "KOR" ? "/assets/homepage/footer/1.svg" : "/assets/homepage/footer/1Eng.svg"}
              alt="Partner 1"
              className={styles.partnerLogo}
            />
            <img
              src="/assets/homepage/footer/2.svg"
              alt="Partner 2"
              className={styles.partnerLogo}
            />
            <img
              src="/assets/homepage/footer/3.svg"
              alt="Partner 3"
              className={styles.partnerLogo}
            />
            <img
              src="/assets/homepage/footer/4.svg"
              alt="Partner 4"
              className={styles.partnerLogo}
            />
            <img
              src="/assets/homepage/footer/5.svg"
              alt="Partner 5"
              className={styles.partnerLogo}
            />
            <img
              src={language === "KOR" ? "/assets/homepage/footer/6.svg" : "/assets/homepage/footer/6Eng.svg"}
              alt="Partner 6"
              className={styles.partnerLogo}
            />
            <img
              src="/assets/homepage/footer/7.svg"
              alt="Partner 7"
              className={styles.partnerLogo}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
