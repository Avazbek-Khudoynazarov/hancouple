"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import InquiryModal from "./InquiryModal";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.contactmain}>
      <section className={styles.contact}>
        <div className={styles.content}>
          <h3 className={styles.title}>Contact Us</h3>
          <div className={styles.mainText}>
            <img
              src="/assets/homepage/contactBack.png"
              alt="background"
              className={styles.backgroundText}
            />
            <h2 className={styles.heading}>
              {language === "KOR" ? (
                <>
                  <span className={styles.desktopBreak}>
                    제품 문의부터 비즈니스 제휴까지
                    <br />
                    무엇이든 물어보세요.
                  </span>
                  <span className={styles.mobileBreak}>
                    제품 문의부터
                    <br />
                    비즈니스 제휴까지
                    <br />
                    무엇이든 물어보세요.
                  </span>
                </>
              ) : (
                <>
                  <span className={styles.desktopBreak}>
                    From product inquiries to business partnerships
                    <br />
                    Ask us anything.
                  </span>
                  <span className={styles.mobileBreak}>
                    From product inquiries
                    <br />
                    to business partnerships
                    <br />
                    Ask us anything.
                  </span>
                </>
              )}
            </h2>
          </div>
          <div className={styles.inputContainer} onClick={() => setIsModalOpen(true)}>
            {language === "KOR" ? "문의하기" : "Contact us"}
            <button className={styles.button}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 25 25">
                <path
                  fill="#fff"
                  d="M22.29.012a.43.43 0 0 1 .316.04l.03.02c.177.11 1.295 1.2 1.43 1.395l.011.017c.345.5-.216.914-.523 1.26-.238.268-.467.542-.7.817.228.336.464.69.28 1.113l-.01.024c-.134.321-1.184 1.38-1.561 1.694l-3.195-3.225c-.128-.129-.25-.263-.4-.366.634-.638 1.484-1.758 2.42-1.276.446-.338 1.47-1.352 1.902-1.513M.73 23.716c.654-.043 1.32-.008 1.975-.008h19.69c.36 0 1.86-.035 2.164.043.488.127.62.9.144 1.133l-.034.016c-.139.065-.265.063-.415.069-.434.016-.87.01-1.305.01H2.493c-.395 0-1.888.088-2.204-.095l-.075-.048c-.265-.2-.276-.66-.076-.907.152-.188.371-.199.592-.213M17.479 3.213c.13.188.313.352.474.514.911.921 1.81 1.854 2.722 2.774.135.136.267.285.418.403-.433.416-.846.852-1.27 1.278C15.878 12.153 8.76 19.328 7.36 20.692c-.364.356-.511.48-.998.67-.71.279-4.159 1.696-4.159 1.696-.347.128-.543-.03-.659-.36.068-.27.168-.525.258-.786.378-1.1.768-2.197 1.136-3.3.308-.924.216-1.067.906-1.751C9.086 11.665 17.013 3.758 17.479 3.213"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
