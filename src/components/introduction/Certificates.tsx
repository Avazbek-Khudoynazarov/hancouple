"use client";

import Image from "next/image";
import styles from "./Certificates.module.css";

export default function Certificates() {
  // Certificate data with titles
  const certificates = [
    { id: 1, title: "녹색기술 인증서" },
    { id: 2, title: "녹색기술제품 확인서" },
    { id: 3, title: "혁신제품 지정 인증서" },
    { id: 4, title: "GS인증(1등급)" },
    { id: 5, title: "상표등록증" },
    { id: 6, title: "특허증" },
    { id: 7, title: "특허증" },
    { id: 8, title: "특허증" },
    { id: 9, title: "특허증" },
    { id: 10, title: "대기전력저감우수제품" },
    { id: 11, title: "대기전력저감우수제품" },
    { id: 12, title: "벤처기업확인서" },
    { id: 13, title: "기업부설연구소 인정서" },
    { id: 14, title: "녹색전문기업 확인서" },
    { id: 15, title: "조달우수제품지정" },
    { id: 16, title: "특허증" },
    { id: 17, title: "중소기업기술마켓 인증서" },
    { id: 18, title: "직접생산확인증명서" },
    { id: 19, title: "품목별 인증수출자 인증서" },
    { id: 20, title: "특허증" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>Certification</h3>
        <h1 className={styles.title}>
          안전과 효율을 담은 인증,
          <br />
          <span className={styles.highlight}>
            네트워크코리아의 약속입니다.
          </span>
        </h1>

        <div className={styles.certificateGrid}>
          {certificates.map((cert) => (
            <div key={cert.id} className={styles.certificateItem}>
              <Image
                src={`/assets/introduction/certificates/${cert.id}.png`}
                alt={cert.title}
                width={264}
                height={346}
                className={styles.certificateImage}
              />
              <h3 className={styles.certificateTitle}>{cert.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
