"use client";

import { useState, useEffect, useRef } from "react";
import NorthIcon from "@mui/icons-material/North";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomPosition, setBottomPosition] = useState(40);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const footer = document.querySelector("footer");
      if (footer && buttonRef.current) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (footerRect.top < windowHeight) {
          const overlap = windowHeight - footerRect.top;
          const newBottom = 20 + overlap + 20;
          setBottomPosition(newBottom);
        } else {
          setBottomPosition(40);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={buttonRef}
      className={`${styles.backToTop} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{ bottom: `${bottomPosition}px` }}>
      <NorthIcon className={styles.icon} />
    </button>
  );
}
