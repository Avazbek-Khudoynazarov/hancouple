"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./Location.module.css";
import { useLanguage } from "@/context/LanguageContext";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Location() {
  const { language } = useLanguage();
  const mapContainer1 = useRef<HTMLDivElement>(null);
  const mapContainer2 = useRef<HTMLDivElement>(null);
  const [mapsReady, setMapsReady] = useState(false);

  useEffect(() => {
    const checkKakaoMaps = setInterval(() => {
      if (window.kakao && window.kakao.maps) {
        clearInterval(checkKakaoMaps);
        window.kakao.maps.load(() => {
          setMapsReady(true);
        });
      }
    }, 100);

    const timeout = setTimeout(() => {
      clearInterval(checkKakaoMaps);
    }, 10000);

    return () => {
      clearInterval(checkKakaoMaps);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (mapsReady) {
      initializeMaps();
    }
  }, [mapsReady]);

  const initializeMaps = () => {
    // Head Office Map - 대구광역시 대천로 9길 11-5 3층
    if (mapContainer1.current) {
      const coords1 = new window.kakao.maps.LatLng(35.8714, 128.5938);

      const mapOption1 = {
        center: coords1,
        level: 3,
      };

      const map1 = new window.kakao.maps.Map(mapContainer1.current, mapOption1);

      new window.kakao.maps.Marker({
        position: coords1,
        map: map1,
      });

      // Use geocoder to get exact coordinates
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(
        "대구광역시 대천로 9길 11-5",
        function (result: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            const exactCoords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            map1.setCenter(exactCoords);
            new window.kakao.maps.Marker({
              position: exactCoords,
              map: map1,
            });
          }
        }
      );
    }

    // Branch Office Map - 경상북도 칠곡군 지천면 금송로 60
    if (mapContainer2.current) {
      const coords2 = new window.kakao.maps.LatLng(36.0154, 128.4784);

      const mapOption2 = {
        center: coords2,
        level: 3,
      };

      const map2 = new window.kakao.maps.Map(mapContainer2.current, mapOption2);

      new window.kakao.maps.Marker({
        position: coords2,
        map: map2,
      });

      // Use geocoder to get exact coordinates
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(
        "경상북도 칠곡군 지천면 금송로 60",
        function (result: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            const exactCoords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            map2.setCenter(exactCoords);
            new window.kakao.maps.Marker({
              position: exactCoords,
              map: map2,
            });
          }
        }
      );
    }
  };

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
          <div ref={mapContainer1} className={styles.mapContainer}></div>
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
          <div ref={mapContainer2} className={styles.mapContainer}></div>
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
