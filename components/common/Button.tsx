import classNames from "classnames";

import { IButton, ESize, EVariant, ERound } from "@/interface/common/button";

/**
 * 커스텀 공통 버튼 컴포넌트
 * 기본 button 태그 attributes extended
 * @params @required label - string : 버튼 라벨
 * @params @required size - keyof typeof ESize : 버튼 width
 * @params @required variant - keyof typeof EVariant : 버튼 컬러 디자인
 * @params @required round - keyof typeof ERound : 버튼 가장자리 라운딩 디자인
 */
const Button = ({ label, size, variant, round, ...props }: IButton) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={classNames(
        ESize[size],
        EVariant[variant],
        ERound[round],
        props.className,
      )}
    >
      {label}
    </button>
  );
};

export default Button;
