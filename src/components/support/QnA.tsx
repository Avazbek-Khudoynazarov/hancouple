"use client";

import { useState } from "react";
import styles from "./QnA.module.css";
import { useLanguage } from "@/context/LanguageContext";

interface TextSegment {
  text: string;
  bold?: boolean;
}

interface AnswerContent {
  type: "text" | "formatted" | "image" | "richText";
  content?: string;
  formattedContent?: {
    lines: { label?: string; text: string }[];
    subSection?: {
      title: string;
      bullets: string[];
    };
  };
  imageContent?: {
    title: string;
    imageSrc: string;
  };
  richTextContent?: {
    lines: TextSegment[][];
  };
}

interface QnAItemData {
  id: number;
  question: string;
  answer: AnswerContent;
}

const qnaDataKor: QnAItemData[] = [
  {
    id: 1,
    question: "법정 점검주기는 어떻게 되나요 ? (직무고시 기준)",
    answer: {
      type: "formatted",
      formattedContent: {
        lines: [
          {
            label: "수시점검",
            text: " : 상시 전기설비 점검 (사고 발생 위험, 이상 징후 발견 시)",
          },
          { label: "월간점검", text: " : 매월 1회 이상" },
          {
            label: "분기점검",
            text: " : 3개월마다 1회 이상 (대규모 수용가/특정 시설)",
          },
          {
            label: "반기·연간점검",
            text: " : 일부 항목은 6개월~1년 주기 (절연저항, 접지저항, 차단기 성능시험 등)",
          },
        ],
        subSection: {
          title: "점검일지 보관기간 :",
          bullets: [
            "「전기안전관리 직무고시」 제 17조 : 3년간 보관 의무",
            "점검일지는 법적 감사 · 사고 조사 시 제출해야 함",
          ],
        },
      },
    },
  },
  {
    id: 2,
    question: "종래 기술방식과 네트워크 제품방식의 차이는 무엇인가요 ?",
    answer: {
      type: "image",
      imageContent: {
        title: "종래방식 vs 우리 제품 솔루션 비교",
        imageSrc: "/assets/contact/QnA.png",
      },
    },
  },
  {
    id: 3,
    question: "형식 포인트는 무엇인가요 ?",
    answer: {
      type: "richText",
      richTextContent: {
        lines: [
          [{ text: "종래방식은 법정 최소 준수 + 사후 점검 중심이고," }],
          [
            { text: "저희 네트워크코리아의 제품은 " },
            {
              text: "법정 준수 + 실시간 사전 예방 + 자동 보고 + 3년 전자보관",
              bold: true,
            },
            { text: "으로" },
          ],
          [
            { text: "효율성과 안전성 모두 강화", bold: true },
            { text: " 시켰습니다." },
          ],
        ],
      },
    },
  },
];

const qnaDataEng: QnAItemData[] = [
  {
    id: 1,
    question:
      "What is the statutory inspection cycle? (Based on job description)",
    answer: {
      type: "formatted",
      formattedContent: {
        lines: [
          {
            label: "Ad hoc inspection",
            text: " : Continuous electrical equipment inspection (when accident risk or abnormal signs are detected)",
          },
          { label: "Monthly inspection", text: " : At least once per month" },
          {
            label: "Quarterly Inspection",
            text: " : At least once every 3 months (for large-scale consumers/specific facilities)",
          },
          {
            label: "Semi-annual/Annual Inspection",
            text: " : Some items at 6-month to 1-year intervals (insulation resistance, ground resistance, circuit breaker performance tests, etc.)",
          },
        ],
        subSection: {
          title: "Inspection Log Retention Period :",
          bullets: [
            "Article 17 of the \"Electrical Safety Management Duties Notice\": Mandatory 3-year retention",
            "Inspection logs must be submitted during legal audits and accident investigations.",
          ],
        },
      },
    },
  },
  {
    id: 2,
    question:
      "What is the difference between conventional technology methods and network product methods?",
    answer: {
      type: "image",
      imageContent: {
        title: "Traditional Approach vs. Our Product Solution Comparison",
        imageSrc: "/assets/contact/QnAEng.png",
      },
    },
  },
  {
    id: 3,
    question: "What is a formal point?",
    answer: {
      type: "richText",
      richTextContent: {
        lines: [
          [
            {
              text: "The conventional approach focuses on minimum legal compliance + post-inspection checks,",
            },
          ],
          [
            { text: "while Network Korea's product enhances " },
            { text: "both efficiency and safety", bold: true },
            { text: " through " },
            {
              text: "legal compliance, real-time proactive prevention, automated reporting, and 3-year electronic archiving.",
              bold: true,
            },
          ],
        ],
      },
    },
  },
];

const ITEMS_PER_PAGE = 3;

export default function QnA() {
  const { language } = useLanguage();
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const qnaData = language === "KOR" ? qnaDataKor : qnaDataEng;
  const totalPages = Math.ceil(qnaData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = qnaData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setExpandedId(null);
    }
  };

  const goToFirst = () => goToPage(1);
  const goToLast = () => goToPage(totalPages);
  const goToPrev = () => goToPage(currentPage - 1);
  const goToNext = () => goToPage(currentPage + 1);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>
            {language === "KOR"
              ? "Q&A(직무고시 대응, 자동보고 활용법)"
              : "Q&A(Compliance/Auto Reporting)"}
          </span>
          <h2 className={styles.sectionTitle}>
            {language === "KOR"
              ? "전기안전 직무고시 & 당사 솔루션 비교"
              : "Electrical Safety Job Description & Our Solution Comparison"}
          </h2>
        </div>

        <div className={styles.qnaList}>
          <div className={styles.qnaLine}></div>
          {currentItems.map((item) => (
            <div key={item.id} className={styles.qnaItem}>
              <button
                className={styles.qnaQuestion}
                onClick={() => toggleExpand(item.id)}>
                <div className={styles.questionContent}>
                  <span className={styles.qMark}>Q.</span>
                  <span className={styles.questionText}>{item.question}</span>
                </div>
                <div
                  className={`${styles.arrowButton} ${
                    expandedId === item.id ? styles.expanded : ""
                  }`}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="rgba(0, 136, 255, 0.5)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              {expandedId === item.id && (
                <div className={styles.qnaAnswer}>
                  <div className={styles.answerContent}>
                    <span className={styles.aMark}>A.</span>
                    <div className={styles.answerText}>
                      {item.answer.type === "text" && (
                        <p>{item.answer.content}</p>
                      )}
                      {item.answer.type === "formatted" && (
                        <>
                          <div className={styles.formattedLines}>
                            {item.answer.formattedContent?.lines.map(
                              (line, idx) => (
                                <p key={idx}>
                                  {line.label && <strong>{line.label}</strong>}
                                  {line.text}
                                </p>
                              )
                            )}
                          </div>
                          {item.answer.formattedContent?.subSection && (
                            <div className={styles.subSection}>
                              <p className={styles.subSectionTitle}>
                                {item.answer.formattedContent.subSection.title}
                              </p>
                              <ul className={styles.bulletList}>
                                {item.answer.formattedContent.subSection.bullets.map(
                                  (bullet, idx) => (
                                    <li key={idx}>{bullet}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </>
                      )}
                      {item.answer.type === "image" &&
                        item.answer.imageContent && (
                          <div className={styles.imageAnswer}>
                            <h3 className={styles.imageAnswerTitle}>
                              {item.answer.imageContent.title}
                            </h3>
                            <img
                              src={item.answer.imageContent.imageSrc}
                              alt={item.answer.imageContent.title}
                              className={styles.answerImage}
                              draggable={false}
                            />
                          </div>
                        )}
                      {item.answer.type === "richText" &&
                        item.answer.richTextContent && (
                          <div className={styles.richTextAnswer}>
                            {item.answer.richTextContent.lines.map(
                              (line, lineIdx) => (
                                <p key={lineIdx}>
                                  {line.map((segment, segIdx) =>
                                    segment.bold ? (
                                      <strong key={segIdx}>
                                        {segment.text}
                                      </strong>
                                    ) : (
                                      <span key={segIdx}>{segment.text}</span>
                                    )
                                  )}
                                </p>
                              )
                            )}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              )}
              <div className={styles.qnaLine}></div>
            </div>
          ))}
        </div>

        <div className={styles.pagination}>
          <button
            className={styles.pageButton}
            onClick={goToFirst}
            disabled={currentPage === 1}>
            «
          </button>
          <button
            className={styles.pageButton}
            onClick={goToPrev}
            disabled={currentPage === 1}>
            ‹
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`${styles.pageNumber} ${
                currentPage === page ? styles.activePage : ""
              }`}
              onClick={() => goToPage(page)}>
              {page}
            </button>
          ))}
          <button
            className={styles.pageButton}
            onClick={goToNext}
            disabled={currentPage === totalPages}>
            ›
          </button>
          <button
            className={styles.pageButton}
            onClick={goToLast}
            disabled={currentPage === totalPages}>
            »
          </button>
        </div>
      </div>
    </div>
  );
}
