"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import FooterMobile from "./FooterMobile";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <FooterMobile />;
  }

  return (
    <footer className={styles.footer}>
      {/* Top Navigation */}
      <div className={styles.topNav}>
        <div className={styles.topNavContainer}>
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
                  <span className={styles.value}>부가통신사업신고번호</span>
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.addressofproject}>
                  <span className={styles.label}>대표</span>
                  <span className={styles.value}>신동환</span>
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
