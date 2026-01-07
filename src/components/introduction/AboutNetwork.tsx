"use client";

import styles from "./AboutNetwork.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutNetwork() {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.containerMainTitle}>
        <h3 className={styles.subtitle}>About Networkkorea</h3>
        <h1 className={styles.title}>
          {language === "KOR" ? (
            <>
              AI로 전기를 읽고,
              <br className={styles.mobileLine} /> 데이터로 위험을 예방하며,
              <br />
              <span className={styles.highlight}>
                기술로 미래를 만듭니다. <br className={styles.mobileLine} />{" "}
              </span>
            </>
          ) : (
            <>
              We read electricity with AI, prevent risks with data,
              <br />
              and <span className={styles.highlight}>create the future with technology</span>.
            </>
          )}
        </h1>
      </div>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <img
            src="/assets/introduction/man.png"
            alt="Network Korea"
            className={styles.image}
          />
        </div>

        <div className={styles.rightSection}>
          <div className={styles.description}>
            {language === "KOR" ? (
              <>
                <p>안녕하십니까. 네트워크코리아 대표입니다.</p>
                <p>
                  오늘날 전기안전과 에너지 관리는 <br /> 경험과 감각만으로 해결할 수
                  없는 시대가 되었습니다.
                  <br /> 전력 데이터는 복잡해졌고, 위험은 더 빠르게 나타나며,
                  <br />
                  에너지비용은 더욱 민감해지고 있습니다.
                </p>

                <p>
                  저희 네트워크코리아는 이 문제를 해결하기 위해 <br /> AI 기반
                  전기진단 기술을 도입했습니다. <br /> AI가 실시간 패턴을 분석하여
                  위험 징후를 조기에 감지하고, <br /> 피크전력과 낭비전력의 원인을
                  자동으로 찾아 <br /> 보다 정확한 절감 전략을 제시합니다.
                </p>

                <p>
                  우리의 목표는 단순한 모니터링이 아니라
                  <br /> 사고 없는 건물, 낭비 없는 전력 운영, 데이터 기반의 미래형
                  관리 체계 구축입니다.
                </p>

                <p>
                  앞으로도 365일 고객의 시설을 지키며 <br /> 안전하고 효율적인
                  에너지 환경을 만들어 나가겠습니다. <br /> 감사합니다.
                </p>
                <p style={{ textAlign: "end", fontWeight: 700 }}>
                  ㈜네트워크코리아 대표 드림
                </p>
              </>
            ) : (
              <>
                <p>Welcome. I am the CEO of Network Korea.</p>
                <p>
                  Today, electrical safety and energy management cannot be
                  achieved solely through experience and intuition. Power data has become
                  complex, risks emerge faster, and energy costs are increasingly sensitive.
                </p>

                <p>
                  To address these challenges, Network Korea has introduced AI-based
                  electrical diagnostic technology.
                  AI analyzes real-time patterns to detect early warning signs of risk and
                  automatically identifies causes of peak power and wasted energy.
                </p>

                <p>
                  We provide more precise reduction strategies.
                  Our goal extends beyond simple monitoring: it's about safe buildings,
                  waste-free power operations, and building a future-ready, data-driven
                  management system.
                </p>

                <p>
                  We will continue to safeguard your facilities 365 days a year,
                  creating a safe and efficient energy environment. Thank you.
                </p>
                <p style={{ textAlign: "end", fontWeight: 700 }}>
                  From the CEO of Network Korea Co., Ltd.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
