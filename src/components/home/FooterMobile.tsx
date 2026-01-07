"use client";

import Link from "next/link";
import styles from "./FooterMobile.module.css";

export default function FooterMobile() {
  return (
    <footer className={styles.footer}>
      {/* Mobile Navigation */}
      <div className={styles.topNav}>
        <nav className={styles.navContainer}>
          <Link href="/introduction" className={styles.navLink}>
            회사소개
          </Link>
          <Link href="/remote-inspection" className={styles.navLink}>
            원격점검/리포트생성
          </Link>
          <Link href="/operation" className={styles.navLink}>
            업종별 운영방안 제안
          </Link>
          <Link href="/consulting" className={styles.navLink}>
            체계적인 전기요금 컨설팅
          </Link>
          <Link href="/support" className={styles.navLink}>
            고객지원
          </Link>
        </nav>
      </div>

      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          {/* Logo and Naver */}
          <div className={styles.logoRow}>
            <img
              src="/assets/homepage/footer.svg"
              alt="(주)네트워크코리아"
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
              <span className={styles.label}>사업자등록번호</span>
              <span className={styles.value}>504-81-55802</span>
            </div>
            <div className={styles.infoLine}>
              <span className={styles.label}>통신판매업신고번호</span>
              <span className={styles.value}>제 2004-대구달서-00070호</span>
            </div>
            <div className={styles.infoLine}>
              <span className={styles.label}>대표</span>
              <span className={styles.value}>신동환</span>
              <span className={styles.separator}>|</span>
              <span className={styles.label}>주소</span>
              <span className={styles.value}>
                대구광역시 북구 대공원로 11-5 3층 (읍내동)
              </span>
            </div>
            <div className={styles.infoLine}>
              <span className={styles.label}>Tel</span>
              <span className={styles.value}>053-326-0114</span>
              <span className={styles.separator}>|</span>
              <span className={styles.label}>Fax</span>
              <span className={styles.value}>부가통신사업신고번호</span>
            </div>
            <div className={styles.infoLine}>
              <span className={styles.label}>E-mail</span>
              <span className={styles.value}>nk@networkkorea.co.kr</span>
            </div>
          </div>

          {/* Copyright */}
          <p className={styles.copyright}>
            COPYRIGHT © 2025 (주)네트워크코리아. ALL RIGHTS RESERVED.
          </p>

          {/* Partner Logos */}
          <div className={styles.partnerLogos}>
            <img
              src="/assets/homepage/footer/1.svg"
              alt="Samsung"
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
              src="/assets/homepage/footer/6.svg"
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
