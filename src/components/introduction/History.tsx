"use client";

import { useEffect, useRef, useState } from "react";
import "./history.css";

type Marker = { topPct: number; year: string };
type TimelineItem = {
  year: string;
  month?: string;
  monthList?: string[];
  texts: string[];
  anchorPx?: number;
  anchorRatio?: number;
  mobileAnchorPx?: number;
  mobileAnchorRatio?: number;
};

const timelineData: TimelineItem[] = [
  {
    year: "2024",
    monthList: ["12", "11", "01"],
    texts: [
      "중소기업기술마켓 인증서 획득",
      "직접생산확인증명서 획득",
      "조달등록(우수제품지정)전기안전 모니터링 및 제어 가능한 스마트 전기안전솔루션",
    ],
    anchorRatio: 0.005,
    mobileAnchorRatio: -0.18,
  },
  {
    year: "2023",
    monthList: ["08", "03"],
    texts: ["안전보건공단 스마트안전장비 품목등록", "삼성물산 협력회사 등록"],
    anchorPx: 10,
    mobileAnchorPx: -45,
  },
  {
    year: "2022",
    monthList: ["05", "03", "01"],
    texts: [
      "녹색전문기업 등록",
      "에너지절약전문기업(ESCO) 등록",
      "중소벤처기업부 탄소바우처 수행기관등록",
    ],
    anchorRatio: 0.09,
    mobileAnchorRatio: -0.07,
  },
  {
    year: "2021",
    monthList: ["12", "10", "09", "04"],
    texts: [
      "기술혁신형 중소기업(Inno-Biz) 확인서 획득 혁신제품 지정 인증서 획득 (5BP-E01-64W)",
      "스마트공장 공급기업등록",
      "녹색기술제품인증 획득 IoT 전력분석제어장치 (1BF-16-S, 5MF-E11-16W, 5BP-E01-64W)",
      "녹색기술인증 획득 위험전력, 낭비전력 분석으로 최적화된 모니터링 및 제어 기술 (All-in-one 서비스)",
    ],
    anchorPx: 60,
    mobileAnchorPx: -1,
  },
  {
    year: "2020",
    monthList: ["11", "05"],
    texts: [
      "2020년 병역지정업체(산업체) 선정",
      "전력감시 자동차단시스템 조달청 혁신시제품 선정",
    ],
    mobileAnchorRatio: 0.07,
  },
  {
    year: "2019",
    monthList: ["12", "04"],
    texts: [
      "스마트전력제어솔루션 8종 벤처나라 등록 선정",
      "나라장터 전시회 참관객이 선정한 유공기업(조달청장상 수상)",
    ],
    anchorPx: 110,
    mobileAnchorPx: 45,
  },
  {
    year: "2018",
    monthList: ["06", "05"],
    texts: [
      "표창장(중소벤처기업부장관) 중소기업마케팅페어(2018) '히든스타5' 선정 MBC특별생방송 '힘내라 중소기업' 출연 중소기업진흥공단 HIT500(우수 중소기업 유망제품) 선정 특허등록 2건",
      "KC(Korea Certification)인증 획득 스페인 MWC, 독일 CEBIT 전시회 참가 ISO9001/14001 인증 획득",
    ],
    anchorRatio: 0.45,
    mobileAnchorRatio: 0.17,
  },
  {
    year: "2017",
    monthList: ["12", "09", "01~12"],
    texts: [
      "무선 전자파적합등록필, 특허등록 2건 중소벤처기업부 수출유망중소기업 지정",
      "스마트 콘센트 [3CYS AKIGO] 출시",
      "미국 CES, 독일 CEBIT, 싱가포르 COMMUNIC ASIA, UAE GITEX, BIG5, 홍콩 ELECTRONICS 등 세계유수 전시회 참가",
    ],
    anchorPx: 160,
    mobileAnchorPx: 95,
  },
  {
    year: "2016",
    monthList: ["11", "10"],
    texts: ["유럽특허 출원", "상표등록"],
    anchorPx: 160,
    mobileAnchorPx: 95,
  },
  {
    year: "2015",
    monthList: ["12", "09", "07"],
    texts: [
      "소프트웨어품질인증서(GS)",
      "특허등록(위급상황 신고장치 및 그 제어방법)외 4개 등록",
      "벤처기업 지정, 기업부설연구소 인정",
    ],
    anchorPx: 160,
    mobileAnchorPx: 95,
  },
  {
    year: "2014",
    monthList: ["07"],
    texts: ["중소기업청 R&D 기술개발사업"],
    anchorPx: 160,
    mobileAnchorPx: 95,
  },
  {
    year: "2003~2013",
    monthList: [""],
    texts: ["KT, SKT, LG유플러스 무선 및 전송망 시설구축사업"],
    anchorPx: 160,
    mobileAnchorPx: 95,
  },
  {
    year: "2003",
    monthList: ["09"],
    texts: ["㈜네트워크코리아 법인 설립"],
    anchorPx: 160,
    mobileAnchorPx: 95,
  },
];

export default function History() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const [rawPct, setRawPct] = useState(0);
  const [snappedIndex, setSnappedIndex] = useState(-1);
  const lastRawPctRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateLinePosition = () => {
      const container = containerRef.current;
      const line = document.querySelector(".timeline-line") as HTMLElement;
      if (container && line) {
        const { left, width } = container.getBoundingClientRect();
        const containerLeft = left + window.scrollX;
        const screenCenter = window.innerWidth / 2;
        const containerCenter = containerLeft + width / 2;
        const offset = screenCenter - containerCenter;
        line.style.setProperty("--timeline-x", `${offset}px`);
      }
    };

    const onScroll = () => {
      const timelineContainer = containerRef.current;
      const progressEl =
        document.querySelector<HTMLElement>(".timeline-progress");
      if (!timelineContainer || !progressEl) return;

      const scrollTop = window.scrollY;
      const containerTop =
        timelineContainer.getBoundingClientRect().top + window.scrollY;
      const containerHeight = timelineContainer.scrollHeight;

      const scrollStartOffset = 450;
      const scrollDistance = scrollTop - (containerTop - scrollStartOffset);
      const maxScrollable =
        containerHeight - window.innerHeight + scrollStartOffset;

      const pct = Math.min(
        Math.max((scrollDistance / maxScrollable) * 100, 0),
        100
      );
      setRawPct(pct);

      const prev = lastRawPctRef.current;
      const goingDown = pct >= prev;
      lastRawPctRef.current = pct;

      if (markers.length > 0) {
        const ps = markers.map((m) => m.topPct);

        let nextIndex = snappedIndex;

        if (goingDown) {
          let i = -1;
          for (let k = 0; k < ps.length; k++) {
            if (ps[k] <= pct) i = k;
          }
          nextIndex = i;
        } else {
          let i = ps.length;
          for (let k = 0; k < ps.length; k++) {
            if (ps[k] >= pct) {
              i = k;
              break;
            }
          }

          let j = -1;
          for (let k = 0; k < ps.length; k++) {
            if (ps[k] <= pct) j = k;
          }
          nextIndex = j;
        }

        setSnappedIndex(nextIndex);

        const snappedPct = nextIndex >= 0 ? ps[nextIndex] : 0;
        progressEl.style.height = `${snappedPct}%`;
      } else {
        progressEl.style.height = `${pct}%`;
      }

      updateLinePosition();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateLinePosition, { passive: true });
    updateLinePosition();
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateLinePosition);
    };
  }, [markers, snappedIndex]);

  useEffect(() => {
    const compute = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerTop =
        container.getBoundingClientRect().top + window.scrollY;
      const containerHeight = container.scrollHeight;

      const next: Marker[] = sectionsRef.current.map((el, i) => {
        const rect = el.getBoundingClientRect();
        const item: any = timelineData[i];

        const px = isMobile
          ? item.mobileAnchorPx ?? item.anchorPx
          : item.anchorPx;
        const ratio = isMobile
          ? item.mobileAnchorRatio ?? item.anchorRatio
          : item.anchorRatio;

        const offsetFromTop =
          typeof px === "number"
            ? px
            : typeof ratio === "number"
            ? rect.height * ratio
            : rect.height / 3.5;

        const refY = rect.top + window.scrollY + offsetFromTop;
        const pct = ((refY - containerTop) / containerHeight) * 100;

        return {
          topPct: Math.max(0, Math.min(100, pct)),
          year: timelineData[i].year,
        };
      });

      setMarkers(next);
    };

    compute();

    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(compute)
        : null;
    if (ro && containerRef.current) ro.observe(containerRef.current);

    return () => ro?.disconnect();
  }, [isMobile]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const winner = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!winner) return;
        const idx = sectionsRef.current.findIndex((el) => el === winner.target);
        if (idx >= 0) setActiveIndex(idx);
      },
      { threshold: [0.25, 0.5, 0.75] }
    );

    sectionsRef.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollToIndex = (i: number) => {
    const el = sectionsRef.current[i];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="config-mainHistory">
      <div className="introduce-header">
        <p className="introduce-tab">History</p>
        <h2 className="introduce-title">
          네트워크코리아가 걸어온 길,
          <br /> <span style={{ color: "#0088ff" }}>미래를 향한 발걸음</span>
        </h2>
      </div>

      <div className="config-scroll-bar" ref={containerRef}>
        <div className="timeline-line">
          <div className="timeline-progress">
            <img
              src="/assets/introduction/dot.svg"
              className="timeline-head-img"
            />
          </div>

          {markers.map((m, i) => {
            const isFilled = i <= snappedIndex;
            return (
              <button
                key={m.year}
                className={`timeline-dot ${isFilled ? "filled" : ""} ${
                  i === activeIndex ? "active" : ""
                }`}
                style={{ top: `${m.topPct}%` }}
                aria-label={m.year}
                onClick={() => scrollToIndex(i)}
              />
            );
          })}
        </div>

        <div className="timeline-content">
          {timelineData.map((item, index) => {
            const isCurrentYear = index === snappedIndex;
            const isRightSide = index % 2 === 0 && !isMobile;

            return (
              <div
                key={item.year}
                ref={(el) => {
                  if (el) sectionsRef.current[index] = el;
                }}
                className={`timeline-section ${
                  isRightSide ? "right" : "left"
                }`}>
                <div className="timeline-text">
                  <div
                    className="text-position"
                    style={{ textAlign: isRightSide ? "start" : "end" }}>
                    <h2
                      className={`history-year-style ${
                        isCurrentYear ? "current" : ""
                      }`}>
                      {item.year}
                    </h2>

                    {item.texts.map((text, idx) => {
                      const hasMonthList = Array.isArray(item.monthList);
                      const month = item.monthList
                        ? item.monthList[idx]
                        : item.month;

                      const shouldShowMonth =
                        hasMonthList || (!hasMonthList && idx === 0);

                      return (
                        <p
                          key={idx}
                          style={{
                            display: "flex",
                            gap: "10px",
                            justifyContent: isRightSide
                              ? "flex-start"
                              : "flex-end",
                            alignItems: "flex-start",
                          }}>
                          {isRightSide && (
                            <span
                              className="month"
                              style={{
                                visibility: shouldShowMonth
                                  ? "visible"
                                  : "hidden",
                              }}>
                              {month}
                            </span>
                          )}

                          <span
                            style={{
                              flex: 1,
                              textAlign: isRightSide ? "start" : "end",
                            }}>
                            {text}
                          </span>

                          {!isRightSide && (
                            <span
                              className="month"
                              style={{
                                visibility: shouldShowMonth
                                  ? "visible"
                                  : "hidden",
                              }}>
                              {month}
                            </span>
                          )}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
