"use client";

import SupportLayout from "./SupportLayout";
import ContactUs from "./ContactUs";
import Report from "./Report";
import UsageReport from "./UsageReport";
import Process from "./Process";
import Footer from "../home/Footer";
import BackToTop from "../home/BackToTop";

export default function Support() {
  return (
    <>
      <SupportLayout />
      <ContactUs />
      <Report />
      <UsageReport />
      <Process />
      <Footer />
      <BackToTop />
    </>
  );
}
