/**
 * Carousel 컴포넌트 Item 인터페이스
 * @params @required title - string : 제목
 * @params @required startDttm - string : 시작 Dttm
 * @params @required endDttm - string : 종료 Dttm
 * @params imgPath - string : 이미지 경로
 * @params btnName - string : 바로가기 버튼 제목
 */
export interface ICarouselItem {
  title: string;
  startDttm: string;
  endDttm: string;
  imgPath?: string;
  btnName?: string;
}
