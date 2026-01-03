"use client";

import ConsultingLayout from "./ConsultingLayout";
import ConsultingResults from "./ConsultingResults";
import Footer from "../home/Footer";
import BackToTop from "../home/BackToTop";

export default function Consulting() {
  return (
    <>
      <ConsultingLayout />
      <ConsultingResults />
      <Footer />
      <BackToTop />
    </>
  );
}
