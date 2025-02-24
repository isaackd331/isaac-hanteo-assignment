"use client";

import { useKeenSlider } from "keen-slider/react";
import classNames from "classnames";
import { useState } from "react";

import CarouselItem from "./CarouselItem";

import { ICarouselItem } from "@/interface/common/carousel";

/**
 * 캐로셀
 * @params @required items - ICarouselItem[] : 캐로셀 아이템 모음
 */
const Carousel = ({ items }: { items: ICarouselItem[] }) => {
  /**
   * 현재 슬라이드 순서 체크
   */
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      perView: 1.4,
      spacing: 10,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className={classNames("flex flex-col items-center gap-y-[1rem]")}>
      {/* 캐로셀 아이템 영역 */}
      <div ref={sliderRef} className={classNames("keen-slider")}>
        {items.map((item) => {
          return (
            <div className={classNames("keen-slider__slide")}>
              <CarouselItem
                title={item.title}
                startDttm={item.startDttm}
                endDttm={item.endDttm}
                href={item.href}
                hrefType={item.hrefType}
                imgPath={item.imgPath}
                btnName={item.btnName}
              />
            </div>
          );
        })}
      </div>

      {/* 캐로셀 dot 버튼 영역 */}
      {instanceRef.current && (
        <div className={classNames("gap-x-[1rem]")}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((index: number) => {
            return (
              <button
                className={classNames(
                  currentSlide === index ? "bg-pink" : "bg-gr-400",
                )}
                key={`캐로셀-dotBtn-${index}`}
                onClick={() => {
                  instanceRef.current?.moveToIdx(index);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Carousel;
