"use client";

import { useKeenSlider } from "keen-slider/react";
import classNames from "classnames";

import { Nav } from "@/utils/constants/Nav";

/**
 * 최상단 헤더
 */
const Header = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 5.8,
    },
  });

  return (
    <nav className={classNames("w-full h-[3rem] bg-pink")}>
      <div ref={sliderRef} className={classNames("keen-slider h-full")}>
        {Nav.map((item, index) => {
          return (
            <div
              className={classNames(
                "keen-slider__slide flex justify-center items-center font-bold text-[1.2rem]",
              )}
              key={`header-nav-${index}-${item.value}`}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
