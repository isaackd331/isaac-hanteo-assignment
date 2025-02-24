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
  /**
   * 컴포넌트 마운트 체크
   */
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slides: {
        origin: "center",
        perView: 1.1,
        spacing: 10,
      },

      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setIsLoaded(true);
      },
    },
    [
      // autoplay
      (slider) => {
        let timeout: number | NodeJS.Timeout;
        // 마우스 오버 시 오토플레이 작동을 막기 위한 변수
        let mouseover: boolean = false;

        const clearNextTimeout = () => {
          clearTimeout(timeout);
        };
        const nextTimeout = () => {
          clearTimeout(timeout);

          if (mouseover) return;

          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        };

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseover = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseover = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  return (
    <div
      className={classNames(
        "flex flex-col items-center mt-[2rem] gap-y-[1rem]",
      )}
    >
      {/* 캐로셀 아이템 영역 */}
      <div ref={sliderRef} className={classNames("keen-slider")}>
        {items.map((item, index) => {
          return (
            <div
              key={`carousel-item-${index}`}
              className={classNames("keen-slider__slide")}
            >
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
      {instanceRef.current && isLoaded && (
        <div className={classNames("flex items-center gap-x-[1rem]")}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((index: number) => {
            return (
              <button
                className={classNames(
                  "w-[1rem] h-[1rem] rounded-full",
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
