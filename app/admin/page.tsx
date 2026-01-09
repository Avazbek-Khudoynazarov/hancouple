"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./admin.module.css";

interface Certificate {
  id: number;
  titleKor: string;
  titleEng: string;
  imagePath: string;
}

interface ConsultingLink {
  id: string;
  titleKor: string;
  titleEng: string;
  url: string;
}

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

interface QnAItem {
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

type ActiveSection = "certificates" | "consulting" | "qna";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeSection, setActiveSection] = useState<ActiveSection>("certificates");

  // Certificates state
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [certLoading, setCertLoading] = useState(false);
  const [certFormData, setCertFormData] = useState({
    titleKor: "",
    titleEng: "",
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [certSubmitStatus, setCertSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Consulting links state
  const [consultingLinks, setConsultingLinks] = useState<{
    [key: string]: ConsultingLink;
  }>({});
  const [linkEditValues, setLinkEditValues] = useState<{ [key: string]: string }>({});
  const [linkSubmitStatus, setLinkSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Q&A state
  const [qnaItems, setQnaItems] = useState<QnAItem[]>([]);
  const [qnaLoading, setQnaLoading] = useState(false);
  const [editingQna, setEditingQna] = useState<QnAItem | null>(null);
  const [qnaFormData, setQnaFormData] = useState<{
    questionKor: string;
    questionEng: string;
    answerType: "text" | "formatted" | "image" | "richText";
    answerKor: QnAItem["answerKor"];
    answerEng: QnAItem["answerEng"];
  }>({
    questionKor: "",
    questionEng: "",
    answerType: "text",
    answerKor: { content: "" },
    answerEng: { content: "" },
  });
  const [qnaSubmitStatus, setQnaSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Q&A image upload state
  const [qnaImageKor, setQnaImageKor] = useState<File | null>(null);
  const [qnaImageEng, setQnaImageEng] = useState<File | null>(null);
  const [qnaImageKorPreview, setQnaImageKorPreview] = useState<string | null>(null);
  const [qnaImageEngPreview, setQnaImageEngPreview] = useState<string | null>(null);
  const [imageUploading, setImageUploading] = useState(false);

  // Fetch certificates
  const fetchCertificates = async () => {
    try {
      const response = await fetch("/api/certificates");
      if (response.ok) {
        const data = await response.json();
        setCertificates(data);
      }
    } catch (error) {
      console.error("Failed to fetch certificates:", error);
    }
  };

  // Fetch consulting links
  const fetchConsultingLinks = async () => {
    try {
      const response = await fetch("/api/consulting-links");
      if (response.ok) {
        const data = await response.json();
        setConsultingLinks(data);
        // Initialize edit values
        const editValues: { [key: string]: string } = {};
        Object.keys(data).forEach((key) => {
          editValues[key] = data[key].url;
        });
        setLinkEditValues(editValues);
      }
    } catch (error) {
      console.error("Failed to fetch consulting links:", error);
    }
  };

  // Fetch Q&A items
  const fetchQnaItems = async () => {
    try {
      const response = await fetch("/api/qna");
      if (response.ok) {
        const data = await response.json();
        setQnaItems(data);
      }
    } catch (error) {
      console.error("Failed to fetch Q&A items:", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchCertificates();
      fetchConsultingLinks();
      fetchQnaItems();
    }
  }, [isAuthenticated]);

  // Check if already authenticated via sessionStorage
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("adminAuth");
    const savedId = sessionStorage.getItem("adminId");
    if (savedAuth && savedId) {
      setPassword(savedAuth);
      setAdminId(savedId);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");

    // Check credentials
    if (adminId === "hancouple" && password === "123456") {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuth", password);
      sessionStorage.setItem("adminId", adminId);
    } else {
      setAuthError("아이디 또는 비밀번호가 일치하지 않습니다");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCertSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage || !certFormData.titleKor || !certFormData.titleEng) {
      setCertSubmitStatus({
        type: "error",
        message: "모든 필드를 입력하고 이미지를 선택해주세요",
      });
      return;
    }

    setCertLoading(true);
    setCertSubmitStatus({ type: null, message: "" });

    try {
      const form = new FormData();
      form.append("titleKor", certFormData.titleKor);
      form.append("titleEng", certFormData.titleEng);
      form.append("image", selectedImage);

      const response = await fetch("/api/certificates", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${password}`,
        },
        body: form,
      });

      if (response.ok) {
        setCertSubmitStatus({
          type: "success",
          message: "인증서가 추가되었습니다!",
        });
        setCertFormData({ titleKor: "", titleEng: "" });
        setSelectedImage(null);
        setImagePreview(null);
        fetchCertificates();
      } else {
        const data = await response.json();
        setCertSubmitStatus({
          type: "error",
          message: data.message || "인증서 추가에 실패했습니다",
        });
      }
    } catch {
      setCertSubmitStatus({
        type: "error",
        message: "오류가 발생했습니다",
      });
    } finally {
      setCertLoading(false);
    }
  };

  const handleCertDelete = async (id: number) => {
    if (!confirm("이 인증서를 삭제하시겠습니까?")) {
      return;
    }

    try {
      const response = await fetch(`/api/certificates?id=${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${password}`,
        },
      });

      if (response.ok) {
        fetchCertificates();
      } else {
        alert("인증서 삭제에 실패했습니다");
      }
    } catch {
      alert("오류가 발생했습니다");
    }
  };

  const handleLinkUpdate = async (linkId: string) => {
    const newUrl = linkEditValues[linkId];
    if (!newUrl) {
      setLinkSubmitStatus({
        type: "error",
        message: "URL을 입력해주세요",
      });
      return;
    }

    try {
      const response = await fetch("/api/consulting-links", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${password}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: linkId, url: newUrl }),
      });

      if (response.ok) {
        setLinkSubmitStatus({
          type: "success",
          message: "링크가 수정되었습니다!",
        });
        fetchConsultingLinks();
        setTimeout(() => {
          setLinkSubmitStatus({ type: null, message: "" });
        }, 3000);
      } else {
        const data = await response.json();
        setLinkSubmitStatus({
          type: "error",
          message: data.message || "링크 수정에 실패했습니다",
        });
      }
    } catch {
      setLinkSubmitStatus({
        type: "error",
        message: "오류가 발생했습니다",
      });
    }
  };

  // Q&A handlers
  const resetQnaForm = () => {
    setQnaFormData({
      questionKor: "",
      questionEng: "",
      answerType: "text",
      answerKor: { content: "" },
      answerEng: { content: "" },
    });
    setEditingQna(null);
    setQnaImageKor(null);
    setQnaImageEng(null);
    setQnaImageKorPreview(null);
    setQnaImageEngPreview(null);
  };

  const handleQnaImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    language: "kor" | "eng"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (language === "kor") {
        setQnaImageKor(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setQnaImageKorPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setQnaImageEng(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setQnaImageEngPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const uploadQnaImage = async (
    file: File,
    language: "kor" | "eng"
  ): Promise<string | null> => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("language", language);

    try {
      const response = await fetch("/api/qna/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${password}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data.imagePath;
      }
      return null;
    } catch {
      return null;
    }
  };

  const getDefaultAnswerContent = (type: QnAItem["answerType"]) => {
    switch (type) {
      case "text":
        return { content: "" };
      case "formatted":
        return {
          formattedContent: {
            lines: [{ label: "", text: "" }],
            subSection: { title: "", bullets: [""] },
          },
        };
      case "image":
        return {
          imageContent: { title: "", imageSrc: "" },
        };
      case "richText":
        return {
          richTextContent: { lines: [[{ text: "", bold: false }]] },
        };
      default:
        return { content: "" };
    }
  };

  const handleAnswerTypeChange = (type: QnAItem["answerType"]) => {
    setQnaFormData({
      ...qnaFormData,
      answerType: type,
      answerKor: getDefaultAnswerContent(type),
      answerEng: getDefaultAnswerContent(type),
    });
  };

  const handleQnaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!qnaFormData.questionKor || !qnaFormData.questionEng) {
      setQnaSubmitStatus({
        type: "error",
        message: "한글과 영문 질문을 모두 입력해주세요",
      });
      return;
    }

    setQnaLoading(true);
    setQnaSubmitStatus({ type: null, message: "" });

    try {
      let finalFormData = { ...qnaFormData };

      // Upload images if answer type is image and files are selected
      if (qnaFormData.answerType === "image") {
        setImageUploading(true);

        // Upload Korean image if selected
        if (qnaImageKor) {
          const korImagePath = await uploadQnaImage(qnaImageKor, "kor");
          if (korImagePath) {
            finalFormData = {
              ...finalFormData,
              answerKor: {
                imageContent: {
                  title: qnaFormData.answerKor.imageContent?.title || "",
                  imageSrc: korImagePath,
                },
              },
            };
          }
        }

        // Upload English image if selected
        if (qnaImageEng) {
          const engImagePath = await uploadQnaImage(qnaImageEng, "eng");
          if (engImagePath) {
            finalFormData = {
              ...finalFormData,
              answerEng: {
                imageContent: {
                  title: qnaFormData.answerEng.imageContent?.title || "",
                  imageSrc: engImagePath,
                },
              },
            };
          }
        }

        setImageUploading(false);
      }

      const method = editingQna ? "PUT" : "POST";
      const body = editingQna
        ? { id: editingQna.id, ...finalFormData }
        : finalFormData;

      const response = await fetch("/api/qna", {
        method,
        headers: {
          Authorization: `Bearer ${password}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setQnaSubmitStatus({
          type: "success",
          message: editingQna
            ? "Q&A 항목이 수정되었습니다!"
            : "Q&A 항목이 추가되었습니다!",
        });
        resetQnaForm();
        fetchQnaItems();
        setTimeout(() => {
          setQnaSubmitStatus({ type: null, message: "" });
        }, 3000);
      } else {
        const data = await response.json();
        setQnaSubmitStatus({
          type: "error",
          message: data.message || "Q&A 항목 저장에 실패했습니다",
        });
      }
    } catch {
      setQnaSubmitStatus({
        type: "error",
        message: "오류가 발생했습니다",
      });
    } finally {
      setQnaLoading(false);
      setImageUploading(false);
    }
  };

  const handleQnaEdit = (item: QnAItem) => {
    setEditingQna(item);
    setQnaFormData({
      questionKor: item.questionKor,
      questionEng: item.questionEng,
      answerType: item.answerType,
      answerKor: item.answerKor,
      answerEng: item.answerEng,
    });
  };

  const handleQnaDelete = async (id: number) => {
    if (!confirm("이 Q&A 항목을 삭제하시겠습니까?")) {
      return;
    }

    try {
      const response = await fetch(`/api/qna?id=${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${password}`,
        },
      });

      if (response.ok) {
        fetchQnaItems();
      } else {
        alert("Q&A 항목 삭제에 실패했습니다");
      }
    } catch {
      alert("오류가 발생했습니다");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAdminId("");
    setPassword("");
    sessionStorage.removeItem("adminAuth");
    sessionStorage.removeItem("adminId");
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h1 className={styles.loginTitle}>관리자 로그인</h1>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <input
              type="text"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              placeholder="아이디를 입력하세요"
              className={styles.loginInput}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              className={styles.loginInput}
            />
            {authError && <p className={styles.errorText}>{authError}</p>}
            <button type="submit" className={styles.loginButton}>
              로그인
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminLayout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>관리자 패널</h2>
        </div>
        <nav className={styles.sidebarNav}>
          <button
            className={`${styles.navItem} ${
              activeSection === "certificates" ? styles.navItemActive : ""
            }`}
            onClick={() => setActiveSection("certificates")}
          >
            <span className={styles.navIcon}>📜</span>
            인증서
          </button>
          <button
            className={`${styles.navItem} ${
              activeSection === "consulting" ? styles.navItemActive : ""
            }`}
            onClick={() => setActiveSection("consulting")}
          >
            <span className={styles.navIcon}>🔗</span>
            컨설팅 링크
          </button>
          <button
            className={`${styles.navItem} ${
              activeSection === "qna" ? styles.navItemActive : ""
            }`}
            onClick={() => setActiveSection("qna")}
          >
            <span className={styles.navIcon}>Q</span>
            Q&A
          </button>
        </nav>
        <div className={styles.sidebarFooter}>
          <button onClick={handleLogout} className={styles.logoutButton}>
            로그아웃
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            {activeSection === "certificates"
              ? "인증서 관리"
              : activeSection === "consulting"
              ? "컨설팅 링크 관리"
              : "Q&A 관리"}
          </h1>
        </header>

        <div className={styles.content}>
          {activeSection === "certificates" ? (
            <>
              {/* Add Certificate Form */}
              <section className={styles.formSection}>
                <h2 className={styles.sectionTitle}>새 인증서 추가</h2>
                <form onSubmit={handleCertSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>한글 제목</label>
                    <input
                      type="text"
                      value={certFormData.titleKor}
                      onChange={(e) =>
                        setCertFormData({ ...certFormData, titleKor: e.target.value })
                      }
                      className={styles.input}
                      placeholder="한글 제목을 입력하세요"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>영문 제목</label>
                    <input
                      type="text"
                      value={certFormData.titleEng}
                      onChange={(e) =>
                        setCertFormData({ ...certFormData, titleEng: e.target.value })
                      }
                      className={styles.input}
                      placeholder="영문 제목을 입력하세요"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>인증서 이미지</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className={styles.fileInput}
                    />
                    {imagePreview && (
                      <div className={styles.imagePreview}>
                        <Image
                          src={imagePreview}
                          alt="Preview"
                          width={150}
                          height={200}
                          className={styles.previewImage}
                        />
                      </div>
                    )}
                  </div>

                  {certSubmitStatus.type && (
                    <p
                      className={
                        certSubmitStatus.type === "success"
                          ? styles.successText
                          : styles.errorText
                      }
                    >
                      {certSubmitStatus.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={certLoading}
                  >
                    {certLoading ? "추가 중..." : "인증서 추가"}
                  </button>
                </form>
              </section>

              {/* Existing Certificates */}
              <section className={styles.listSection}>
                <h2 className={styles.sectionTitle}>
                  등록된 인증서 ({certificates.length})
                </h2>
                <div className={styles.certificateGrid}>
                  {certificates.map((cert) => (
                    <div key={cert.id} className={styles.certificateCard}>
                      <Image
                        src={cert.imagePath}
                        alt={cert.titleKor}
                        width={120}
                        height={160}
                        className={styles.certificateImage}
                      />
                      <div className={styles.certificateInfo}>
                        <p className={styles.certTitleKor}>{cert.titleKor}</p>
                        <p className={styles.certTitleEng}>{cert.titleEng}</p>
                      </div>
                      <button
                        onClick={() => handleCertDelete(cert.id)}
                        className={styles.deleteButton}
                      >
                        삭제
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            </>
          ) : activeSection === "consulting" ? (
            <>
              {/* Consulting Links Management */}
              <section className={styles.formSection}>
                <h2 className={styles.sectionTitle}>컨설팅 페이지 링크 수정</h2>
                <p className={styles.sectionDescription}>
                  컨설팅 섹션의 HTML 페이지 링크를 수정합니다. 클릭 시 새 탭에서 열립니다.
                </p>

                {linkSubmitStatus.type && (
                  <p
                    className={
                      linkSubmitStatus.type === "success"
                        ? styles.successText
                        : styles.errorText
                    }
                    style={{ marginBottom: "20px" }}
                  >
                    {linkSubmitStatus.message}
                  </p>
                )}

                <div className={styles.linksContainer}>
                  {Object.keys(consultingLinks).map((key) => {
                    const link = consultingLinks[key];
                    return (
                      <div key={key} className={styles.linkCard}>
                        <div className={styles.linkHeader}>
                          <h3 className={styles.linkTitleKor}>{link.titleKor}</h3>
                          <p className={styles.linkTitleEng}>{link.titleEng}</p>
                        </div>
                        <div className={styles.linkForm}>
                          <input
                            type="text"
                            value={linkEditValues[key] || ""}
                            onChange={(e) =>
                              setLinkEditValues({
                                ...linkEditValues,
                                [key]: e.target.value,
                              })
                            }
                            className={styles.linkInput}
                            placeholder="URL을 입력하세요 (예: /assets/page.html)"
                          />
                          <button
                            onClick={() => handleLinkUpdate(key)}
                            className={styles.updateButton}
                          >
                            수정
                          </button>
                        </div>
                        <p className={styles.currentUrl}>
                          현재: <code>{link.url}</code>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            </>
          ) : (
            <>
              {/* Q&A Management */}
              <section className={styles.formSection}>
                <h2 className={styles.sectionTitle}>
                  {editingQna ? "Q&A 항목 수정" : "새 Q&A 항목 추가"}
                </h2>

                {qnaSubmitStatus.type && (
                  <p
                    className={
                      qnaSubmitStatus.type === "success"
                        ? styles.successText
                        : styles.errorText
                    }
                    style={{ marginBottom: "20px" }}
                  >
                    {qnaSubmitStatus.message}
                  </p>
                )}

                <form onSubmit={handleQnaSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>질문 (한글)</label>
                    <textarea
                      value={qnaFormData.questionKor}
                      onChange={(e) =>
                        setQnaFormData({
                          ...qnaFormData,
                          questionKor: e.target.value,
                        })
                      }
                      className={styles.textarea}
                      placeholder="한글 질문을 입력하세요"
                      rows={2}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>질문 (영문)</label>
                    <textarea
                      value={qnaFormData.questionEng}
                      onChange={(e) =>
                        setQnaFormData({
                          ...qnaFormData,
                          questionEng: e.target.value,
                        })
                      }
                      className={styles.textarea}
                      placeholder="영문 질문을 입력하세요"
                      rows={2}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>답변 유형</label>
                    <select
                      value={qnaFormData.answerType}
                      onChange={(e) =>
                        handleAnswerTypeChange(
                          e.target.value as QnAItem["answerType"]
                        )
                      }
                      className={styles.select}
                    >
                      <option value="text">텍스트</option>
                      <option value="image">이미지</option>
                    </select>
                  </div>

                  {/* Text Answer */}
                  {qnaFormData.answerType === "text" && (
                    <>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>답변 (한글)</label>
                        <textarea
                          value={qnaFormData.answerKor.content || ""}
                          onChange={(e) =>
                            setQnaFormData({
                              ...qnaFormData,
                              answerKor: { content: e.target.value },
                            })
                          }
                          className={styles.textarea}
                          placeholder="한글 답변을 입력하세요"
                          rows={4}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>답변 (영문)</label>
                        <textarea
                          value={qnaFormData.answerEng.content || ""}
                          onChange={(e) =>
                            setQnaFormData({
                              ...qnaFormData,
                              answerEng: { content: e.target.value },
                            })
                          }
                          className={styles.textarea}
                          placeholder="영문 답변을 입력하세요"
                          rows={4}
                        />
                      </div>
                    </>
                  )}

                  {/* Image Answer */}
                  {qnaFormData.answerType === "image" && (
                    <>
                      {/* Korean Image */}
                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          이미지 제목 (한글)
                        </label>
                        <input
                          type="text"
                          value={
                            qnaFormData.answerKor.imageContent?.title || ""
                          }
                          onChange={(e) =>
                            setQnaFormData({
                              ...qnaFormData,
                              answerKor: {
                                imageContent: {
                                  title: e.target.value,
                                  imageSrc:
                                    qnaFormData.answerKor.imageContent
                                      ?.imageSrc || "",
                                },
                              },
                            })
                          }
                          className={styles.input}
                          placeholder="한글 이미지 제목을 입력하세요"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          이미지 업로드 (한글용)
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleQnaImageChange(e, "kor")}
                          className={styles.fileInput}
                        />
                        {qnaImageKorPreview && (
                          <div className={styles.imagePreview}>
                            <Image
                              src={qnaImageKorPreview}
                              alt="한글 미리보기"
                              width={200}
                              height={150}
                              className={styles.previewImage}
                            />
                          </div>
                        )}
                        {!qnaImageKorPreview &&
                          qnaFormData.answerKor.imageContent?.imageSrc && (
                            <p className={styles.currentUrl}>
                              현재:{" "}
                              <code>
                                {qnaFormData.answerKor.imageContent.imageSrc}
                              </code>
                            </p>
                          )}
                      </div>

                      {/* English Image */}
                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          이미지 제목 (영문)
                        </label>
                        <input
                          type="text"
                          value={
                            qnaFormData.answerEng.imageContent?.title || ""
                          }
                          onChange={(e) =>
                            setQnaFormData({
                              ...qnaFormData,
                              answerEng: {
                                imageContent: {
                                  title: e.target.value,
                                  imageSrc:
                                    qnaFormData.answerEng.imageContent
                                      ?.imageSrc || "",
                                },
                              },
                            })
                          }
                          className={styles.input}
                          placeholder="영문 이미지 제목을 입력하세요"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>
                          이미지 업로드 (영문용)
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleQnaImageChange(e, "eng")}
                          className={styles.fileInput}
                        />
                        {qnaImageEngPreview && (
                          <div className={styles.imagePreview}>
                            <Image
                              src={qnaImageEngPreview}
                              alt="영문 미리보기"
                              width={200}
                              height={150}
                              className={styles.previewImage}
                            />
                          </div>
                        )}
                        {!qnaImageEngPreview &&
                          qnaFormData.answerEng.imageContent?.imageSrc && (
                            <p className={styles.currentUrl}>
                              현재:{" "}
                              <code>
                                {qnaFormData.answerEng.imageContent.imageSrc}
                              </code>
                            </p>
                          )}
                      </div>
                    </>
                  )}

                  <div className={styles.buttonGroup}>
                    <button
                      type="submit"
                      className={styles.submitButton}
                      disabled={qnaLoading || imageUploading}
                    >
                      {imageUploading
                        ? "이미지 업로드 중..."
                        : qnaLoading
                        ? "저장 중..."
                        : editingQna
                        ? "Q&A 수정"
                        : "Q&A 추가"}
                    </button>
                    {editingQna && (
                      <button
                        type="button"
                        onClick={resetQnaForm}
                        className={styles.cancelButton}
                      >
                        수정 취소
                      </button>
                    )}
                  </div>
                </form>
              </section>

              {/* Existing Q&A Items */}
              <section className={styles.listSection}>
                <h2 className={styles.sectionTitle}>
                  등록된 Q&A 항목 ({qnaItems.length})
                </h2>
                <div className={styles.qnaList}>
                  {qnaItems.map((item) => (
                    <div key={item.id} className={styles.qnaCard}>
                      <div className={styles.qnaCardHeader}>
                        <span className={styles.qnaType}>{item.answerType}</span>
                        <span className={styles.qnaId}>#{item.id}</span>
                      </div>
                      <div className={styles.qnaQuestions}>
                        <p className={styles.qnaQuestionKor}>
                          <strong>한글:</strong> {item.questionKor}
                        </p>
                        <p className={styles.qnaQuestionEng}>
                          <strong>영문:</strong> {item.questionEng}
                        </p>
                      </div>
                      <div className={styles.qnaActions}>
                        <button
                          onClick={() => handleQnaEdit(item)}
                          className={styles.editButton}
                        >
                          수정
                        </button>
                        <button
                          onClick={() => handleQnaDelete(item.id)}
                          className={styles.deleteButton}
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
