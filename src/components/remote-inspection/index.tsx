"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import RemoteInspectionLayout from "./RemoteInspectionLayout";
import RealTimeMonitoring from "./RealTimeMonitoring";
import OperationalManual from "./OperationalManual";
import OperationalManualPower from "./OperationalManualPower";
import OperationalManualFire from "./OperationalManualFire";
import OperationalManualRisk from "./OperationalManualRisk";
import OperationalManualEnergy from "./OperationalManualEnergy";
import PowerManagement from "./PowerManagement";
import FireSafety from "./FireSafety";
import RiskAssessment from "./RiskAssessment";
import EnergySaving from "./EnergySaving";
import AutoReport from "./AutoReport";
import OperationalManualReport from "./OperationalManualReport";
import Footer from "../home/Footer";
import BackToTop from "../home/BackToTop";

export default function RemoteInspection() {
  const searchParams = useSearchParams();
  const [activeMenu, setActiveMenu] = useState("실시간 피크전력 모니터링");

  useEffect(() => {
    const menu = searchParams.get("menu");
    if (menu) {
      setActiveMenu(menu);
    }
  }, [searchParams]);

  const renderContent = () => {
    switch (activeMenu) {
      case "실시간 피크전력 모니터링":
        return (
          <>
            <RealTimeMonitoring />
            <OperationalManual />
          </>
        );
      case "배전반 차단기별 전력관리 모니터링":
        return (
          <>
            <PowerManagement />
            <OperationalManualPower />
          </>
        );
      case "차단기별 전기 화재 안전 모니터링":
        return (
          <>
            <FireSafety />
            <OperationalManualFire />
          </>
        );
      case "위험성 판단 & 2차 사고 예방 모니터링":
        return (
          <>
            <RiskAssessment />
            <OperationalManualRisk />
          </>
        );
      case "에너지 절감 운영매뉴얼 제공":
        return (
          <>
            <EnergySaving />
            <OperationalManualEnergy />
          </>
        );
      case "전기안전 직무고시 원격계측 / 자동 리포트 생성":
        return (
          <>
            <AutoReport />
            <OperationalManualReport />
          </>
        );
      default:
        return (
          <>
            <RealTimeMonitoring />
            <OperationalManual />
          </>
        );
    }
  };

  return (
    <>
      <RemoteInspectionLayout activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      {renderContent()}
      <Footer />
      <BackToTop />
    </>
  );
}
