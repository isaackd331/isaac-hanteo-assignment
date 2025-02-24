/**
 * 차트 컨텐츠 아이템 인터페이스
 * @params @required id - string : 컨텐츠 아이템 아이디, 임시로 1로 고정
 * @params @required thumbPath - string : 섬네일 경로
 * @params @required title - string : 제목
 */
export interface IChartContent {
  id: 1;
  thumbPath: string;
  title: string;
}

/**
 * 차트 컨텐츠 GET API 인터페이스
 * @params page - number : 호출 페이지, 기본 0
 * @params pageSize - number : 한 페이지 당 불러올 컨텐츠 개수, 기본 10
 */
export interface IGetChartContents {
  page?: unknown;
  pageSize?: number;
}
