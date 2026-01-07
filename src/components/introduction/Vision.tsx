"use client";

import styles from "./Vision.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Vision() {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>Vision</h3>
        <h1 className={styles.title}>
          {language === "KOR" ? (
            <>
              관리자와 기술자가 함께
              <br />
              <span className={styles.highlight}>
                스마트하게 에너지를 관리하는 시대
              </span>
              를 제공합니다.
            </>
          ) : (
            <>
              We provide{" "}
              <span className={styles.highlight}>
                a service that enables managers
                <br />
                and technicians to manage energy together smartly.
              </span>
            </>
          )}
        </h1>

        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            {language === "KOR"
              ? "에너지를 아끼는 습관, 비용을 줄이는 기술"
              : "Energy-saving habits, cost-reducing technology"}
          </h2>

          <div className={styles.description}>
            {language === "KOR" ? (
              <>
                <p>네트워크코리아는 단순한 솔루션 제공을 넘어,</p>
                <p>
                  전기기술자와 시설 담당자의 효율적인 업무 수행과 전문성 강화를
                  돕습니다.
                </p>
                <p>
                  전기요금에 대한 감정 없이, 전기화재에 대한 두려움 없이, 과학적는
                  데이터를 보고 판단하고,
                </p>
                <p>
                  전기기술자는 현장 발로 없이 원격으로 분석을 파악하고 조치하는
                  시대.
                </p>
              </>
            ) : (
              <>
                <p>Network Korea goes beyond simply providing solutions,</p>
                <p>
                  We help electrical technicians and facility managers perform their duties efficiently and enhance their expertise.
                </p>
                <p>
                  A time when managers can review data and make decisions without worrying about electricity bills or fearing electrical fires,
                  and electricians can identify causes and take action remotely without on-site visits.
                </p>
              </>
            )}
          </div>

          <div className={styles.divider}></div>

          <div className={styles.footer}>
            <p className={styles.footerSubtext}>
              {language === "KOR"
                ? "그 길을 네트워크코리아가 함께 열어갑니다."
                : "Network Korea is pioneering this future together."}
            </p>
            <p className={styles.footerSubtext}>
              {language === "KOR" ? "감사합니다." : "Thank you."}
            </p>
            <p className={styles.signature}>
              {language === "KOR" ? "주식회사 네트워크코리아" : "Network Korea Co., Ltd."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
