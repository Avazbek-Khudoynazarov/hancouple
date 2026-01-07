"use client";

import styles from "./EducationSecond.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function EducationSecond() {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.dots}>
        <img src="/assets/operation/dots.svg" alt="" />
      </div>
      <div className={styles.titleSection}>
        {language === "KOR" ? (
          <p className={styles.subtitle}>
            부하 관리와 전열기 알람으로 <br className={styles.vision} />
            위험을 줄이고,
            <br /> <b>효율적인 전력 운영</b>으로{" "}
            <br className={styles.vision} />
            쾌적한 학교를 유지하세요.
          </p>
        ) : (
          <p className={styles.subtitle}>
            Reduce risks with load management and heating appliance alarms,
            <br /> and maintain a comfortable school through{" "}
            <b>efficient power operation.</b>
          </p>
        )}
      </div>

      {/* Two Cards Section */}
      <div className={styles.cardsContainer}>
        {/* Left Card - Temperature */}
        <div className={styles.cardLeft}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>
              {language === "KOR"
                ? "전기요금 상승 요인"
                : "Factors Driving Rising Electricity Costs"}
            </h3>
            <p className={styles.cardDescription}>
              {language === "KOR" ? (
                <>
                  교실·실험실의 냉난방 설비와 다수의 ICT기기,
                  <br /> 체육관·강당의 전력 부하로 인해 <br /> 사용 전력이
                  집중되며 요금이 상승
                </>
              ) : (
                <>
                  Power consumption is concentrated in classrooms and labs
                  <br /> due to heating/cooling systems, numerous ICT devices,
                  <br /> and power loads in gyms and auditoriums, leading to
                  increased costs
                </>
              )}
            </p>
          </div>
        </div>

        {/* Right Card - Fire */}
        <div className={styles.cardRight}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>
              {language === "KOR"
                ? "대표 사고 사례"
                : "Representative Reported Cases"}
            </h3>
            <p className={styles.cardDescription}>
              {language === "KOR" ? (
                <>
                  실험실 전열기 과열로 인한 화재와 <br /> 기숙사 히터의 과부하로
                  인한 <br />
                  전기적 사고 위험 발생
                </>
              ) : (
                <>
                  Risks of fires from overheated lab heating appliances
                  <br /> and electrical accidents from dorm heater overloads.
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomContent}>
          <h3 className={styles.bottomTitle}>
            {language === "KOR" ? "예방 및 솔루션" : "Prevention and Solutions"}
          </h3>
          {language === "KOR" ? (
            <p className={styles.bottomDescription}>
              <b>시간표 연동 부하제어와 전열기 관리</b>로{" "}
              <br className={styles.vision} />
              전력 부하와 화재 위험을 줄이고,
              <br />
              <b>효율적인 전력 운영</b>으로 <br className={styles.vision} />
              학생 안전과 에너지 절감을 실현합니다.
            </p>
          ) : (
            <p className={styles.bottomDescription}>
              <b>Schedule-linked load control and heater management</b> reduce
              power load and fire risks,
              <br /> while <b>efficient power operation</b> ensures student
              safety and energy savings.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
