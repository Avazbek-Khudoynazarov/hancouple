"use client";

import styles from "./Location.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Location() {
  const { language } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>Location</h3>
        <h1 className={styles.title}>
          {language === "KOR" ? (
            <>
              네트워크코리아로 가는
              <br />
              <span className={styles.highlight}>가장 빠른 길</span>
            </>
          ) : (
            <>
              <span className={styles.highlight}>The Fastest Path</span>
              <br />
              to Network Korea
            </>
          )}
        </h1>

        {/* Head Office Section */}
        <div className={styles.officeSection}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.5!2d128.5515477!3d35.9386623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e726a70cda1d%3A0x6ee174e6b99a1ebc!2z64yA6rWs6rSR7Jet7IucIOu2geq1rCDrjIDsspzroZw56ri4IDExLTUgM-y4tQ!5e0!3m2!1sko!2skr!4v1704790000000"
            className={styles.mapContainer}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className={styles.infoContainer}>
            <h4 className={styles.officeLabel}>Head Office</h4>
            <h2 className={styles.officeName}>
              {language === "KOR" ? "네트워크코리아 (본사)" : "Network Korea (Office)"}
            </h2>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Address</span>
              <span className={styles.infoValue}>
                {language === "KOR"
                  ? "대구광역시 대천로 9길 11-5 3층"
                  : "3F, 11-5, Daecheon-ro 9-gil, Buk-gu, Daegu, Republic of Korea"}
              </span>
            </div>

            <div className={styles.contactRow}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Tel</span>
                <span className={styles.contactValue}>053.326.0114</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Fax</span>
                <span className={styles.contactValue}>053.326.5008</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.officeSection}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.5!2d128.463924!3d35.9473995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e974db068adf%3A0x4bc5b6d6aab3489a!2z7JiB7KeE7KCE66y464yA7ZWZ6rWQIOq4gOuhnOuyhOy6oO2NvOyKpCDsnbjsoJzri4jsmoBr!5e0!3m2!1sko!2skr!4v1704790000000"
            className={styles.mapContainer}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className={styles.infoContainer}>
            <h4 className={styles.officeLabel}>Branch Office</h4>
            <h2 className={styles.officeName}>
              {language === "KOR" ? "네트워크코리아 (R&D Center)" : "Network Korea (R&D Center)"}
            </h2>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Address</span>
              <span className={styles.infoValue}>
                {language === "KOR"
                  ? "경상북도 칠곡군 지천면 금송로 60 영진글로벌 캠퍼스 기업연구관 306호"
                  : "Room 306, Yeongjin Global Campus, 60 Geumsong-ro, Jicheon-myeon, Chilgok-gun, Gyeongsangbuk-do, Republic of Korea"}
              </span>
            </div>

            <div className={styles.contactRow}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Tel</span>
                <span className={styles.contactValue}>010.6256.6518</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>E-mail</span>
                <span className={styles.contactValue}>
                  nk@networkkorea.co.kr
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
