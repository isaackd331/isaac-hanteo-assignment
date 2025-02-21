/**
 * Nav 인터페이스
 * @params @required name - string : 메뉴 노출명
 * @params @required value - string : 메뉴 밸류명
 * @params href - string : 엔드포인트
 */
export interface INav {
  name: string;
  value: string;
  href?: string;
}
