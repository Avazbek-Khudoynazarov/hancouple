"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import SupportLayout from "./SupportLayout";
import ContactUs from "./ContactUs";
import Report from "./Report";
import UsageReport from "./UsageReport";
import CaseStudy from "./CaseStudy";
import AutoReport from "./AutoReport";
import Process from "./Process";
import QnA from "./QnA";
import Footer from "../home/Footer";
import BackToTop from "../home/BackToTop";

export default function Support() {
  const searchParams = useSearchParams();
  const [activeMenu, setActiveMenu] = useState("문의하기");

  useEffect(() => {
    const menu = searchParams.get("menu");
    if (menu) {
      setActiveMenu(menu);
    }
  }, [searchParams]);

  const renderContent = () => {
    switch (activeMenu) {
      case "문의하기":
        return (
          <>
            <ContactUs />
            <Report />
            <UsageReport />
            <Process />
          </>
        );
      case "설치/적용 사례":
        return (
          <>
            <CaseStudy />
            <AutoReport />
          </>
        );
      case "Q&A":
        return (
          <>
            <QnA />
          </>
        );
      default:
        return (
          <>
            <ContactUs />
            <Report />
            <UsageReport />
            <Process />
          </>
        );
    }
  };

  return (
    <>
      <SupportLayout activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      {renderContent()}

      <Footer />
      <BackToTop />
    </>
  );
}
