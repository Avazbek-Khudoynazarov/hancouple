"use client";

import styles from "./Location.module.css";

export default function Location() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>Location</h3>
        <h1 className={styles.title}>
          네트워크코리아로 가는
          <br />
          <span className={styles.highlight}>가장 빠른 길</span>
        </h1>

        {/* Head Office Section */}
        <div className={styles.officeSection}>
          <div className={styles.mapContainer}>
            {/* Kakao Map will be integrated here */}
          </div>
          <div className={styles.infoContainer}>
            <h4 className={styles.officeLabel}>Head Office</h4>
            <h2 className={styles.officeName}>네트워크코리아 (본사)</h2>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Address</span>
              <span className={styles.infoValue}>
                대구광역시 대천로 9길 11-5 3층
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
          <div className={styles.mapContainer}></div>
          <div className={styles.infoContainer}>
            <h4 className={styles.officeLabel}>Branch Office</h4>
            <h2 className={styles.officeName}>네트워크코리아 (R&D Center)</h2>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Address</span>
              <span className={styles.infoValue}>
                경상북도 칠곡군 지천면 금송로 60 영진글로벌 캠퍼스 기업연구관
                306호
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
