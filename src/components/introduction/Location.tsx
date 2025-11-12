"use client";

import { useRef, useState, useEffect } from "react";
import Script from "next/script";
import styles from "./Location.module.css";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Location() {
  const mapContainer1 = useRef<HTMLDivElement>(null);
  const mapContainer2 = useRef<HTMLDivElement>(null);
  const [mapsReady, setMapsReady] = useState(false);

  const handleScriptLoad = () => {
    console.log("Script loaded, initializing Kakao Maps...");

    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        console.log("Kakao Maps library ready");
        if (window.kakao.maps.LatLng && window.kakao.maps.Map) {
          setMapsReady(true);
        } else {
          console.error("Kakao Maps constructors not available");
        }
      });
    } else {
      console.error("Kakao Maps not found on window");
    }
  };

  useEffect(() => {
    if (mapsReady) {
      console.log("Initializing maps...");
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

      const map1 = new window.kakao.maps.Map(
        mapContainer1.current,
        mapOption1
      );

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

      const map2 = new window.kakao.maps.Map(
        mapContainer2.current,
        mapOption2
      );

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
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=3f4e5b68b3818c0b7ea1441039691f73&libraries=services&autoload=false`}
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
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
            <div ref={mapContainer1} className={styles.mapContainer}></div>
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
            <div ref={mapContainer2} className={styles.mapContainer}></div>
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
    </>
  );
}
