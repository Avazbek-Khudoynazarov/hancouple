"use client";

import { useState, useEffect } from "react";
import styles from "./QnA.module.css";
import { useLanguage } from "@/context/LanguageContext";

interface TextSegment {
  text: string;
  bold?: boolean;
}

interface FormattedContent {
  lines: { label?: string; text: string }[];
  subSection?: {
    title: string;
    bullets: string[];
  };
}

interface ImageContent {
  title: string;
  imageSrc: string;
}

interface RichTextContent {
  lines: TextSegment[][];
}

interface AnswerContent {
  type: "text" | "formatted" | "image" | "richText";
  content?: string;
  formattedContent?: FormattedContent;
  imageContent?: ImageContent;
  richTextContent?: RichTextContent;
}

interface QnAItemData {
  id: number;
  question: string;
  answer: AnswerContent;
}

interface ApiQnAItem {
  id: number;
  questionKor: string;
  questionEng: string;
  answerType: "text" | "formatted" | "image" | "richText";
  answerKor: {
    content?: string;
    formattedContent?: FormattedContent;
    imageContent?: ImageContent;
    richTextContent?: RichTextContent;
  };
  answerEng: {
    content?: string;
    formattedContent?: FormattedContent;
    imageContent?: ImageContent;
    richTextContent?: RichTextContent;
  };
}

const ITEMS_PER_PAGE = 3;

export default function QnA() {
  const { language } = useLanguage();
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [apiData, setApiData] = useState<ApiQnAItem[]>([]);

  useEffect(() => {
    const fetchQnaData = async () => {
      try {
        const response = await fetch("/api/qna");
        if (response.ok) {
          const data = await response.json();
          setApiData(data);
        }
      } catch (error) {
        console.error("Failed to fetch Q&A data:", error);
      }
    };
    fetchQnaData();
  }, []);

  // Convert API data to component format based on language
  const qnaData: QnAItemData[] = apiData.map((item) => {
    const isKorean = language === "KOR";
    const answerData = isKorean ? item.answerKor : item.answerEng;

    return {
      id: item.id,
      question: isKorean ? item.questionKor : item.questionEng,
      answer: {
        type: item.answerType,
        content: answerData.content,
        formattedContent: answerData.formattedContent,
        imageContent: answerData.imageContent,
        richTextContent: answerData.richTextContent,
      },
    };
  });

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
