import moment from "moment";
import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "../Button";

import { EHrefType, ICarouselItem } from "@/interface/common/carousel";

/**
 * Carousel 단일 아이템 컴포넌트
 */
const CarouselItem = ({
  title,
  startDttm,
  endDttm,
  href,
  hrefType,
  imgPath,
  btnName,
}: ICarouselItem) => {
  const router = useRouter();

  /**
   * 진행 여부 확인
   */
  const isOn: boolean = moment().isBetween(startDttm, endDttm);

  /**
   * 클릭 이벤트
   */
  const onClickHandler = () => {
    // 내부 경로일 때
    if (hrefType === "inner") {
      router.push(href);
    }
    // 외부 경로일 때
    else if (hrefType === "outer") {
      window.open(href, "_blank");
    }
  };

  return (
    <div
      className={classNames(
        "flex flex-col w-full rounded-[1rem] border-gr-400-light",
      )}
    >
      {/* 이미지 영역 */}
      <div
        className={classNames(
          "relative mb-[1rem] p-[1rem] overflow-hidden cursor-pointer",
        )}
        onClick={onClickHandler}
      >
        {/* isOn Bool에 따른 진행중/종료 조건부 렌더링 */}
        <Button
          disabled
          label={isOn ? "진행 중" : "종료"}
          size="fit"
          variant={isOn ? "prFill" : "grayDisabled"}
          round="square"
          className={classNames("absolute top-[1rem] left-[1rem] z-[2]")}
        />

        {/* 이미지 */}
        <Image src={imgPath} alt={`캐로셀-${title}-${imgPath}`} fill />
      </div>
    </div>
  );
};

export default CarouselItem;
