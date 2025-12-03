"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import OperationLayout from "./OperationLayout";
import CareFacilities from "./CareFacilities";
import Medical from "./Medical";
import Manufacturing from "./Manufacturing";
import Education from "./Education";
import SmallBusiness from "./SmallBusiness";
import ShoppingMall from "./ShoppingMall";
import Camping from "./Camping";
import ElectricVehicle from "./ElectricVehicle";
import Footer from "../home/Footer";
import BackToTop from "../home/BackToTop";

export default function Operation() {
  const searchParams = useSearchParams();
  const [activeMenu, setActiveMenu] = useState("요양시설 · 장애인복지시설");

  useEffect(() => {
    const menu = searchParams.get("menu");
    if (menu) {
      setActiveMenu(menu);
    }
  }, [searchParams]);

  const renderContent = () => {
    switch (activeMenu) {
      case "요양시설 · 장애인복지시설":
        return <CareFacilities />;
      case "병원 · 의료기관":
        return <Medical />;
      case "제조업 공장":
        return <Manufacturing />;
      case "초 ·중 ·고 · 대학교":
        return <Education />;
      case "전통시장 · 소상공인":
        return <SmallBusiness />;
      case "대형 쇼핑몰 · 다중이용시설":
        return <ShoppingMall />;
      case "캠핑장 · 야영장 시설":
        return <Camping />;
      case "전기차 충전시설":
        return <ElectricVehicle />;
      default:
        return <CareFacilities />;
    }
  };

  return (
    <>
      <OperationLayout activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      {renderContent()}
      <Footer />
      <BackToTop />
    </>
  );
}
