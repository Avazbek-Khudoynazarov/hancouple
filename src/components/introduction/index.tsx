"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import IntroductionLayout from "./IntroductionLayout";
import AboutNetwork from "./AboutNetwork";
import AkigoMessage from "./AkigoMessage";
import Vision from "./Vision";
import Certificates from "./Certificates";
import History from "./History";
import Location from "./Location";
import Footer from "../home/Footer";

export default function Introduction() {
  const searchParams = useSearchParams();
  const menuParam = searchParams.get("menu");
  const [activeMenu, setActiveMenu] = useState(menuParam || "인사말");

  useEffect(() => {
    if (menuParam) {
      setActiveMenu(menuParam);
    }
  }, [menuParam]);

  const renderContent = () => {
    switch (activeMenu) {
      case "인사말":
        return (
          <>
            <AboutNetwork />
            <AkigoMessage />
          </>
        );
      case "연혁":
        return <History />;
      case "비전":
        return <Vision />;
      case "인증특허":
        return <Certificates />;
      case "오시는 길":
        return <Location />;
      default:
        return (
          <>
            <AboutNetwork />
            <AkigoMessage />
          </>
        );
    }
  };

  return (
    <>
      <IntroductionLayout activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      {renderContent()}
      <Footer />
    </>
  );
}
