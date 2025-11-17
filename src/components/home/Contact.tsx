"use client";

import styles from "./Contact.module.css";

export default function Contact() {
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
            </h2>
          </div>
          <div className={styles.inputContainer}>
            문의하기
            <button className={styles.button}>
              <img
                src="/assets/homepage/pen.svg"
                alt="send"
                className={styles.penIcon}
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
