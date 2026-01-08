"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Certificates.module.css";
import { useLanguage } from "@/context/LanguageContext";

interface Certificate {
  id: number;
  titleKor: string;
  titleEng: string;
  imagePath: string;
}

export default function Certificates() {
  const { language } = useLanguage();
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch("/api/certificates");
        if (response.ok) {
          const data = await response.json();
          setCertificates(data);
        }
      } catch (error) {
        console.error("Failed to fetch certificates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>Certification</h3>
        <h1 className={styles.title}>
          {language === "KOR" ? (
            <>
              안전과 효율을 담은 인증,
              <br />
              <span className={styles.highlight}>
                네트워크코리아의 약속입니다.
              </span>
            </>
          ) : (
            <>
              Certification for safety and
              <br />
              efficiency—it is <span className={styles.highlight}>our promise.</span>
            </>
          )}
        </h1>

        {loading ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <div className={styles.certificateGrid}>
            {certificates.map((cert) => (
              <div key={cert.id} className={styles.certificateItem}>
                <Image
                  src={cert.imagePath}
                  alt={language === "KOR" ? cert.titleKor : cert.titleEng}
                  width={264}
                  height={346}
                  className={styles.certificateImage}
                />
                <h3 className={styles.certificateTitle}>
                  {language === "KOR" ? cert.titleKor : cert.titleEng}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
