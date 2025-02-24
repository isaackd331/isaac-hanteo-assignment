import { http, HttpResponse } from "msw";

import { ICarouselItem } from "@/interface/common/carousel";
import { IChartContent } from "@/interface/chart/interface";

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

const CONTENTS_MOCK_DATA: IChartContent[] = [
  { id: 1, thumbPath: "/aurora1.webp", title: "테스트1" },
  {
    id: 1,
    thumbPath: "/aurora2.webp",
    title:
      "이것은 아주 긴 제목으로, 테스트 항목이 너무 길어지는 경우를 위한 제목입니다.",
  },
  { id: 1, thumbPath: "/aurora3.webp", title: "테스트3" },
  { id: 1, thumbPath: "/aurora1.webp", title: "테스트4" },
  { id: 1, thumbPath: "/aurora2.webp", title: "테스트5" },
  { id: 1, thumbPath: "/aurora3.webp", title: "테스트6" },
  {
    id: 1,
    thumbPath: "/aurora1.webp",
    title: "길어지는 제목을 처리할 때 어떻게 될지 테스트해보는 항목입니다.",
  },
  { id: 1, thumbPath: "/aurora2.webp", title: "테스트8" },
  {
    id: 1,
    thumbPath: "/aurora3.webp",
    title: "이 제목은 긴 테스트 제목이어서 화면에 일부만 보일 것입니다.",
  },
  { id: 1, thumbPath: "/aurora1.webp", title: "테스트10" },
  { id: 1, thumbPath: "/aurora2.webp", title: "테스트11" },
  {
    id: 1,
    thumbPath: "/aurora3.webp",
    title: "길고 긴 제목이지만, 이건 테스트 제목이 아닙니다.",
  },
  { id: 1, thumbPath: "/aurora1.webp", title: "테스트13" },
  { id: 1, thumbPath: "/aurora2.webp", title: "테스트14" },
  { id: 1, thumbPath: "/aurora3.webp", title: "테스트15" },
  { id: 1, thumbPath: "/aurora1.webp", title: "테스트16" },
  {
    id: 1,
    thumbPath: "/aurora2.webp",
    title: "길어지는 제목을 처리할 때 어떻게 될지 테스트해보는 항목입니다.",
  },
  { id: 1, thumbPath: "/aurora3.webp", title: "테스트18" },
  { id: 1, thumbPath: "/aurora1.webp", title: "테스트19" },
  {
    id: 1,
    thumbPath: "/aurora2.webp",
    title: "길고 긴 제목이지만, 이건 테스트 제목이 아닙니다.",
  },
  { id: 1, thumbPath: "/aurora3.webp", title: "테스트21" },
  { id: 1, thumbPath: "/aurora1.webp", title: "테스트22" },
  {
    id: 1,
    thumbPath: "/aurora2.webp",
    title: "길어지는 제목을 처리할 때 어떻게 될지 테스트해보는 항목입니다.",
  },
  {
    id: 1,
    thumbPath: "/aurora3.webp",
    title:
      "이것은 아주 긴 제목으로, 테스트 항목이 너무 길어지는 경우를 위한 제목입니다.",
  },
  { id: 1, thumbPath: "/aurora1.webp", title: "테스트25" },
  { id: 1, thumbPath: "/aurora2.webp", title: "테스트26" },
  { id: 1, thumbPath: "/aurora3.webp", title: "테스트27" },
  { id: 1, thumbPath: "/aurora1.webp", title: "테스트28" },
  {
    id: 1,
    thumbPath: "/aurora2.webp",
    title: "길어지는 제목을 처리할 때 어떻게 될지 테스트해보는 항목입니다.",
  },
  { id: 1, thumbPath: "/aurora3.webp", title: "테스트30" },
  {
    id: 1,
    thumbPath: "/aurora1.webp",
    title: "최종 긴 제목이 보여주는 엘리시스 처리를 확인해보는 항목입니다.",
  },
  {
    id: 1,
    thumbPath: "/aurora2.webp",
    title: "테스트긴 제목 제목 제목 제목 제목",
  },
  {
    id: 1,
    thumbPath: "/aurora3.webp",
    title: "테스트긴 제목 제목 제목 제목 제목",
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

/**
 * 차트 컨텐츠 데이터 GET
 */
const getChartContents = http.get("/chart/contents", ({ request }) => {
  // 쿼리 파라미터 획득
  const url = new URL(request.url);

  const pageSize: number =
    parseInt(url.searchParams.get("pageSize") || "10") || 10;
  const page: number = parseInt(url.searchParams.get("page") || "0") || 0;

  const startIndex: number = page * pageSize;
  const endIndex: number = startIndex + pageSize;

  const result: IChartContent[] = CONTENTS_MOCK_DATA.slice(
    startIndex,
    endIndex,
  );

  return HttpResponse.json(result, {
    status: 200,
  });
});

export const chartMockApis = [getChartCarouselItems, getChartContents];
