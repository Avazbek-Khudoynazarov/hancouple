"use client";

import { useState } from "react";
import styles from "./InquiryModal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useLanguage } from "@/context/LanguageContext";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    department: "",
    email: "",
    year: "",
    month: "",
    day: "",
    noSchedule: false,
    content: "",
    privacyAgreed: false,
  });

  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          company: formData.company,
          department: formData.department,
          email: formData.email,
          year: formData.year,
          month: formData.month,
          day: formData.day,
          noSchedule: formData.noSchedule,
          content: formData.content,
        }),
      });

      if (response.ok) {
        setShowSuccessModal(true);
      } else {
        const data = await response.json();
        setErrorMessage(data.message || (language === "KOR" ? "문의 접수 중 오류가 발생했습니다." : "An error occurred while submitting your inquiry."));
      }
    } catch (error) {
      console.error("Submit error:", error);
      setErrorMessage(language === "KOR" ? "네트워크 오류가 발생했습니다. 다시 시도해주세요." : "A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      company: "",
      department: "",
      email: "",
      year: "",
      month: "",
      day: "",
      noSchedule: false,
      content: "",
      privacyAgreed: false,
    });
    setErrorMessage("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {!showSuccessModal && (
        <>
          <div className={styles.overlay} onClick={handleClose} />
          <div className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {language === "KOR" ? "상담 및 문의하기" : "Support & Inquiries"}
          </h2>
          <p className={styles.subtitle}>
            {language === "KOR"
              ? "궁금한 사항을 남겨주시면 빠른 시일 내에 답변 드리겠습니다."
              : "Please leave your questions, and we will respond promptly."}
          </p>
          <div className={styles.emailInfo}>
            <span className={styles.emailLabel}>E-mail</span>
            <span className={styles.emailValue}>nk@networkkorea.co.kr</span>
          </div>
          <button className={styles.closeButton} onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            {/* Row 1 */}
            <div className={styles.formGroup}>
              <label className={styles.label}>
                {language === "KOR" ? "이름 (담당자)" : "Name (Person in Charge)"} <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={language === "KOR" ? "이름을 입력해주세요" : "Please enter your name"}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                {language === "KOR" ? "연락처" : "Contact"} <span className={styles.required}>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={language === "KOR" ? "하이픈(-) 없이 01012345678 형태로 입력해주세요" : "Please enter in the format 01012345678 without hyphens (-)"}
                className={styles.input}
                required
              />
            </div>

            {/* Row 2 */}
            <div className={styles.formGroup}>
              <label className={styles.label}>
                {language === "KOR" ? "기업명" : "Company Name"} <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder={language === "KOR" ? "기업명을 입력해주세요" : "Please enter your company name"}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                {language === "KOR" ? "부서(직위)" : "Department (Position)"} <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                placeholder={language === "KOR" ? "부서를 입력해주세요" : "Please enter your department"}
                className={styles.input}
                required
              />
            </div>

            {/* Row 3 */}
            <div className={styles.formGroup}>
              <label className={styles.label}>
                {language === "KOR" ? "이메일" : "E-mail"} <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={language === "KOR" ? "이메일을 입력해주세요" : "Please enter your company E-mail"}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                {language === "KOR" ? "희망 시공 일정" : "Preferred construction schedule"} <span className={styles.required}>*</span>
              </label>
              <div className={styles.datePickerRow}>
                <div className={styles.dateSelects}>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className={styles.dateSelect}
                    disabled={formData.noSchedule}
                  >
                    <option value="">{language === "KOR" ? "년도" : "YYYY"}</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <select
                    name="month"
                    value={formData.month}
                    onChange={handleInputChange}
                    className={styles.dateSelect}
                    disabled={formData.noSchedule}
                  >
                    <option value="">{language === "KOR" ? "월" : "MM"}</option>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    name="day"
                    value={formData.day}
                    onChange={handleInputChange}
                    className={styles.dateSelect}
                    disabled={formData.noSchedule}
                  >
                    <option value="">{language === "KOR" ? "일" : "DD"}</option>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </div>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="noSchedule"
                    checked={formData.noSchedule}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <span className={styles.checkboxText}>{language === "KOR" ? "정해진 기간 없음" : "No set period"}</span>
                </label>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={styles.formGroupFull}>
            <label className={styles.label}>
              {language === "KOR" ? "문의 상세 내용" : "Inquiry Details"} <span className={styles.required}>*</span>
            </label>
            <div className={styles.textareaWrapper}>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder={language === "KOR" ? "문의 세부 내용을 입력해주세요" : "Please enter the details of your inquiry"}
                className={styles.textarea}
                maxLength={1000}
                required
              />
              <span className={styles.charCount}>
                {formData.content.length} / 1,000
              </span>
            </div>
          </div>

          {/* Privacy Agreement */}
          <div className={styles.privacyRow}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="privacyAgreed"
                checked={formData.privacyAgreed}
                onChange={handleInputChange}
                className={styles.checkbox}
                required
              />
              <span className={styles.privacyText}>
                {language === "KOR" ? "개인정보 수집 및 이용 동의" : "Consent to Collection and Use of Personal Information"}
              </span>
            </label>
            <button
              type="button"
              className={styles.viewButton}
              onClick={() => setShowPrivacyModal(true)}
            >
              {language === "KOR" ? "보기" : "View"}
            </button>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? (language === "KOR" ? "접수 중..." : "Sending...")
              : (language === "KOR" ? "문의하기" : "Send Inquiry")}
          </button>
        </form>
      </div>

      {/* Privacy Modal */}
      {showPrivacyModal && (
        <>
          <div
            className={styles.privacyOverlay}
            onClick={() => setShowPrivacyModal(false)}
          />
          <div className={styles.privacyModal}>
            <div className={styles.privacyHeader}>
              <h3 className={styles.privacyTitle}>
                {language === "KOR" ? "개인정보 수집 및 이용 동의" : "Consent to Collection and Use of Personal Information"}
              </h3>
              <button
                className={styles.privacyCloseButton}
                onClick={() => setShowPrivacyModal(false)}
              >
                <CloseIcon />
              </button>
            </div>
            <div className={styles.privacyContent}>
              <p className={styles.privacyIntro}>
                {language === "KOR"
                  ? "수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다."
                  : "Please read carefully and agree after reviewing the items of personal information collected, the purpose of collection and use, and the retention and use period."}
              </p>
              <ul className={styles.privacyList}>
                <li>
                  <strong>{language === "KOR" ? "· 수집 및 이용목적" : "· Purpose of Collection and Use"}</strong> : {language === "KOR"
                    ? "문의 접수 및 처리, 처리 내역 보관 용도, 중복 상담 확인"
                    : "Receiving and processing inquiries, storing and processing records, verifying duplicate consultations"}
                </li>
                <li>
                  <strong>{language === "KOR" ? "· 항목" : "· Items"}</strong> : {language === "KOR"
                    ? "(필수) 이름, 연락처, 기업명, 부서(직위), 이메일, 희망 시공 일정, 문의 상세 내용"
                    : "(Required) Name, Contact, Company Name, Department (Position), Email, Preferred Construction Schedule, Inquiry Details"}
                </li>
                <li>
                  <strong>{language === "KOR" ? "· 보관기간" : "· Retention Period"}</strong> : {language === "KOR"
                    ? "수집·이용 동의일로부터 12개월"
                    : "12 months from the date of consent to collection and use"}
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
        </>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <>
          <div className={styles.successOverlay} onClick={handleSuccessClose} />
          <div className={styles.successModal}>
            <button
              className={styles.successCloseButton}
              onClick={handleSuccessClose}
            >
              <CloseIcon />
            </button>
            <div className={styles.successContent}>
              <p className={styles.successText}>
                {language === "KOR"
                  ? "상담 및 문의가 성공적으로 접수되었습니다."
                  : "Your consultation and inquiry have been successfully received."}
              </p>
              <p className={styles.successSubtext}>
                {language === "KOR"
                  ? "확인 후 빠른 시일 내에 답변드리겠습니다."
                  : "We will respond promptly after review."}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
