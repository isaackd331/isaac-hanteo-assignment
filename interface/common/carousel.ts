/**
 * Carousel 클릭 시 전송할 경로 타입
 * inner : 서비스 내 경로
 * outer : 서비스 외 경로
 */
export const EHrefType = {
  inner: "서비스 내 경로",
  outer: "서비스 외 경로",
} as const;
type EHrefType = (typeof EHrefType)[keyof typeof EHrefType];

/**
 * Carousel 컴포넌트 Item 인터페이스
 * @params @required title - string : 제목
 * @params @required startDttm - string : 시작 Dttm
 * @params @required endDttm - string : 종료 Dttm
 * @params @required href - string : 전송할 경로
 * @params @required hrefType - EHrefType : 전송할 경로 타입
 * @params @required imgPath - string : 이미지 경로
 * @params btnName - string : 바로가기 버튼 제목
 */
export interface ICarouselItem {
  title: string;
  startDttm: string;
  endDttm: string;
  href: string;
  hrefType: keyof typeof EHrefType;
  imgPath: string;
  btnName?: string;
}
