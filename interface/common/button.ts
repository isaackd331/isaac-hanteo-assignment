/**
 * 커스텀 버튼 Width 이넘
 * full : w-full
 * half : w-1/2
 * fit : w-fit
 */
export const ESize = {
  full: "w-full",
  half: "w-1/2",
  fit: "w-fit",
} as const;
type ESize = (typeof ESize)[keyof typeof ESize];

/**
 * 커스텀 버튼 디자인 이넘
 */
export const EVariant = {
  grayDisabled: "bg-gr-400 font-[600] text-gr-50 text-[1rem]",
  prFill: "bg-pink font-[600] text-gr-50 text-[1rem] p-[0.2rem]",
  prOutlined: "bg-gr-50 font-[600] text-pink text-[1rem] px-[1rem] py-[0.2rem]",
} as const;
type EVariant = (typeof EVariant)[keyof typeof EVariant];

/**
 * 커스텀 버튼 라운딩 이넘
 */
export const ERound = {
  square: "rounded",
  lg: "rounded-lg",
  circle: "rounded-full",
} as const;
type ERound = (typeof ERound)[keyof typeof ERound];

/**
 * 커스텀 버튼 인터페이스
 * 기본 button 태그 attributes extended
 * @params @required label - string : 버튼 라벨
 * @params @required size - keyof typeof ESize : 버튼 width
 * @params @required variant - keyof typeof EVariant : 버튼 컬러 디자인
 * @params @required round - keyof typeof ERound : 버튼 가장자리 라운딩 디자인
 */
export interface IButton extends React.ComponentPropsWithoutRef<"button"> {
  label: string;
  size: keyof typeof ESize;
  variant: keyof typeof EVariant;
  round: keyof typeof ERound;
}
