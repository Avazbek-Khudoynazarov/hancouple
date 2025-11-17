"use client";

import Script from "next/script";

export default function KakaoMapScript() {
  return (
    <Script
      src="//dapi.kakao.com/v2/maps/sdk.js?appkey=43c362de9014e94602489e04a5a3ccdc&libraries=services"
      strategy="afterInteractive"
    />
  );
}
