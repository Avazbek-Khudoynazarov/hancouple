"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Navigation */}
      <div className={styles.topNav}>
        <div className={styles.topNavContainer}>
          <a href="#" className={styles.navLink}>
            회사소개
          </a>
          <a href="#" className={styles.navLink}>
            전자결함/리포트생성
          </a>
          <a href="#" className={styles.navLink}>
            법홍팔 문의방안 계긴
          </a>
          <a href="#" className={styles.navLink}>
            제재적인 전기요금 컨설팅
          </a>
          <a href="#" className={styles.navLink}>
            고객지원
          </a>
          <div className={styles.naverLogo}>
            <Link href={"https://blog.naver.com/network_korea01"}>
              <img src="/assets/homepage/naver.svg" alt="Naver Blog" />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <img
              src="/assets/homepage/footer.svg"
              alt="Network Korea"
              className={styles.mainLogo}
            />
            <div className={styles.infoGroup}>
              <div className={styles.infoRow}>
                <div className={styles.addressofproject}>
                  <span className={styles.label}>사업자등록번호</span>
                  <span className={styles.value}>504-81-55802</span>
                  <span className={styles.separator}>|</span>
                  <span className={styles.label}>통신판매업신고번호</span>
                  <span className={styles.value}>제 2004-대구달서-00070호</span>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.label}>Tel</span>
                  <span className={styles.value}>053-326-0114</span>
                  <span className={styles.separator}>|</span>
                  <span className={styles.label}>Fax</span>
                  <span className={styles.value}>부기능산업진고판호</span>
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.addressofproject}>
                  <span className={styles.label}>대표</span>
                  <span className={styles.value}>신동일</span>
                  <span className={styles.separator}>|</span>
                  <span className={styles.label}>주소</span>
                  <span className={styles.value}>
                    대구광역시 북구 대공원로 11-5 3층 (읍내동)
                  </span>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.label}>E-mail</span>
                  <span className={styles.value}>nk@networkkorea.co.kr</span>
                </div>
              </div>
            </div>
            <p className={styles.copyright}>
              COPYRIGHT © 2025 (주)네트워크코리아. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Right Side */}
          <div className={styles.rightSection}>
            <div className={styles.logoGrid}>
              <img
                src="/assets/homepage/footer/1.svg"
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
      </div>
    </footer>
  );
}
