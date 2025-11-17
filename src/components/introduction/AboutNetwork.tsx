"use client";

import styles from "./AboutNetwork.module.css";

export default function AboutNetwork() {
  return (
    <div className={styles.container}>
      <div className={styles.containerMainTitle}>
        <h3 className={styles.subtitle}>About Networkkorea</h3>
        <h1 className={styles.title}>
          네트워크코리아는 <br className={styles.mobileLine} /> 정밀한 전력
          진단으로
          <br />
          <span className={styles.highlight}>
            에너지 사용을 <br className={styles.mobileLine} /> 과학적으로 설계
          </span>
          합니다.
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
            <p>
              네트워크 코리아는 건물 에너지 분석 솔루션 업체로서 낭비전력,
              피크전력, 전기안전(과부하, 누전, 이상 주파수, 과전압)등 일반인도
              전기기술자처럼 판단하도록 위험 전력과 에너지 절약계획서를
              정량적으로 진단/처방정보와 함께 제공하는 토털 솔루션입니다. 
            </p>

            <p>
              이를 토대로 피크전력과 효율분석으로 전기요금 상승 요인을 분석하여
              적정 전기요금정보까지 분석하여 정보 제공하는 서비스입니다.
            </p>

            <p>
              또한 전기안전의 위험이 발생하였을 경우 자동 차단하고, 즉시 해당
              관계자에게 문자 알림과 경광등 울림으로 빠른 조치를 취할 수 있는
              장치 솔루션입니다. <br /> 이러한 ICT 데이터 기반 기술로 해당
              사용자에게 전기안전과 전력정보를 제공하여 기후변화에 따른
              탄소배출량 감소에 노력하고 있습니다.
            </p>

            <p>
              당사는 탄소중립을 지향하는 정책에 부합하는 서비스로 지구환경을
              생각하고, 고객중심의 편리성과 가치를 높이기 위해 경제성과 ,
              안전성, 확장성을 고려한 소비자 중심의 스마트 전력분석 솔루션
              서비스가 주력 서비스입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
