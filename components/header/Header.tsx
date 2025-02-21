"use client";

import { useKeenSlider } from "keen-slider/react";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";

import { Nav } from "@/utils/constants/Nav";

/**
 * 최상단 헤더
 */
const Header = () => {
  // 현재 페이지 path 확인
  const pathname = usePathname();
  const router = useRouter();

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
                "keen-slider__slide flex justify-center items-center font-bold text-[1.2rem] cursor-pointer",
                // 현재 path와 메뉴의 href가 동일할 경우 selected 효과
                pathname === item.href ? "text-gr-50" : "text-gr-900",
              )}
              key={`header-nav-${index}-${item.value}`}
              onClick={() => {
                if (item.href) {
                  router.push(item.href);
                }
              }}
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
