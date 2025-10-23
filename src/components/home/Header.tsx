"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import styles from "./Header.module.css";

const slides = [
  {
    image: "/assets/homepage/back/1.png",
    title: "전기안전사고 예방의\n출발점",
    description: "상시계측서비스",
  },
  {
    image: "/assets/homepage/back/2.png",
    title: "효율적인 사용량 모니터링\n피크전력최소화",
    description: "전기요금절약 운영 솔루션",
  },
  {
    image: "/assets/homepage/back/3.png",
    title: "전기요금이\n부담 된다면",
    description: "절감 & 계약전력 최적화",
  },
  {
    image: "/assets/homepage/back/4.png",
    title: "근로자 재해로\n중대재해처벌법 대응이 필요하다면",
    description: "AI 원격 전기안전",
  },
  {
    image: "/assets/homepage/back/5.png",
    title: "늘 화재에노출되어\n관리가 필요하다면",
    description: "차단기별 실시간 예방",
  },
  {
    image: "/assets/homepage/back/6.png",
    title: "차단기(설비)별\n전기사용량이 궁금하다면",
    description: "실시간 분석 리포트",
  },
  {
    image: "/assets/homepage/back/7.png",
    title: "피크전력으로\n추가요금이 걱정된다면",
    description: "15분 단위 분석 & 알림",
  },
  {
    image: "/assets/homepage/back/8.png",
    title: "전기안전·피크·낭비전력을\n한눈에 보고 싶다면",
    description: "통합 대시보드 제공",
  },
  {
    image: "/assets/homepage/back/9.png",
    title: "탄소중립·ESG 경영 평가가\n필요하다면",
    description: "절감성과 & 탄소저감 리포트 자동 제공",
  },
  {
    image: "/assets/homepage/back/10.png",
    title: "중대재해와 화재를\n사전예방 하려면",
    description: "차단기별 실시간 전기안전 모니터링 & 자동 알람",
  },
];

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    setProgress(0);

    // Progress bar animation (updates every 50ms for smooth animation)
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 100 / (7000 / 70); // 5000ms total, update every 50ms
      });
    }, 50);

    // Slide change every 5 seconds
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setProgress(0);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
  };

  useEffect(() => {
    if (!isPaused) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }

    return () => {
      stopAutoSlide();
    };
  }, [isPaused, currentSlide]);

  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  };

  return (
    <header className={styles.header}>
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.backgroundImage} ${
            index === currentSlide ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.textContent}>
          <AnimatePresence mode="wait">
            <motion.h2
              key={`title-${currentSlide}`}
              className={styles.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
            >
              {slides[currentSlide].title.split('\n').map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  {index < slides[currentSlide].title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`description-${currentSlide}`}
              className={styles.description}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  delay: 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
            >
              {slides[currentSlide].description.split('\n').map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  {index < slides[currentSlide].description.split('\n').length - 1 && <br />}
                </span>
              ))}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          {/* Pause/Play Button with Progress Circle */}
          <div className={styles.pauseContainer}>
            <svg className={styles.progressRing} width="60" height="60">
              <circle
                className={styles.progressRingCircle}
                stroke="#ffffff"
                strokeWidth="2"
                fill="transparent"
                r="28"
                cx="30"
                cy="30"
              />
              <circle
                className={styles.progressRingProgress}
                stroke="#ffffff"
                strokeWidth="2"
                fill="transparent"
                r="28"
                cx="30"
                cy="30"
                style={{
                  strokeDasharray: `${2 * Math.PI * 28}`,
                  strokeDashoffset: `${
                    2 * Math.PI * 28 * (1 - progress / 100)
                  }`,
                }}
              />
            </svg>
            <button
              className={styles.pauseButton}
              onClick={handlePauseToggle}
              aria-label={isPaused ? "Play" : "Pause"}>
              {isPaused ? (
                <PlayArrowIcon sx={{ fontSize: 24, color: "#ffffff" }} />
              ) : (
                <PauseIcon sx={{ fontSize: 24, color: "#ffffff" }} />
              )}
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            className={styles.navButton}
            onClick={handlePrev}
            aria-label="Previous slide">
            <img src="/assets/homepage/prev.svg" alt="Previous" />
          </button>

          {/* Slide Counter */}
          <div className={styles.counter}>
            <span className={styles.currentNumber}>
              {String(currentSlide + 1).padStart(2, "0")}
            </span>
            <span className={styles.divider}>|</span>
            <span className={styles.totalNumber}>
              {String(totalSlides).padStart(2, "0")}
            </span>
          </div>

          <button
            className={styles.navButton}
            onClick={handleNext}
            aria-label="Next slide">
            <img src="/assets/homepage/next.svg" alt="Next" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>SCROLL</span>
          <div className={styles.scrollIcon}>
            <div className={styles.scrollDot} />
          </div>
        </div>
      </div>
    </header>
  );
}
