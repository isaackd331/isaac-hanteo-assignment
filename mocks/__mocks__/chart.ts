import { http, HttpResponse } from "msw";

import { ICarouselItem } from "@/interface/common/carousel";

/**
 * 캐로셀 Mock 데이터
 */
const CAROUSEL_MOCK_DATA: ICarouselItem[] = [
  {
    title: "테스트1-진행중-내부경로",
    startDttm: "2025-02-10 10:00",
    endDttm: "2025-03-10 10:00",
    href: "/chart/1",
    hrefType: "inner",
    imgPath: "/aurora1.webp",
  },
  {
    title: "테스트2-진행중-외부경로",
    startDttm: "2025-02-10 10:00",
    endDttm: "2025-03-10 10:00",
    href: "https://www.naver.com",
    hrefType: "outer",
    imgPath: "/aurora2.webp",
  },
  {
    title: "테스트3-종료-내부경로",
    startDttm: "2025-02-10 10:00",
    endDttm: "2025-02-23 10:00",
    href: "/chart/1",
    hrefType: "inner",
    imgPath: "/aurora1.webp",
  },
  {
    title: "테스트4-종료-외부경로",
    startDttm: "2025-02-10 10:00",
    endDttm: "2025-02-23 10:00",
    href: "https://www.naver.com",
    hrefType: "outer",
    imgPath: "/aurora2.webp",
  },
  {
    title:
      "테스트5-긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목",
    startDttm: "2025-02-10 10:00",
    endDttm: "2025-03-10 10:00",
    href: "/chart/1",
    hrefType: "inner",
    imgPath: "/aurora3.webp",
  },
];

/**
 * 차트 페이지 캐로셀 데이터 GET
 */
const getChartCarouselItems = http.get("/chart/carousel", () => {
  return HttpResponse.json(CAROUSEL_MOCK_DATA, {
    status: 200,
  });
});

export const chartMockApis = [getChartCarouselItems];
