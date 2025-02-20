"use client";

import { useKeenSlider } from "keen-slider/react";
import classNames from "classnames";

import { Nav } from "@/utils/constants/Nav";

/**
 * 최상단 헤더
 */
const Header = () => {
  const [sliderRef, instanceRef] = useKeenSlider({});

  return (
    <nav className={classNames("w-full h-[5rem] bg-pink")}>
      <div ref={sliderRef} className="keen-slider"></div>
    </nav>
  );
};

export default Header;
