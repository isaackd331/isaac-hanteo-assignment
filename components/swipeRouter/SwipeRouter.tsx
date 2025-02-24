"use client";

import { useSwipeable } from "react-swipeable";
import { useRouter, usePathname } from "next/navigation";

import { Nav } from "@/utils/constants/Nav";

/**
 * 헤더와 푸터를 제외한 영역에서 좌우 스와이핑 시 메뉴 넘김 지원을 위한 컴포넌트
 * 2depth가 아닌 1depth 화면에서만 해당 기능 제공
 */
const SwipeRouter = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const pathname = usePathname();
  // 현재 경로 인덱스 확인
  const currentIndex = Nav.findIndex((item) => item.href === pathname);

  const swipeHandler = useSwipeable({
    onSwipedLeft: () => {
      // 다음 메뉴로 이동
      if (currentIndex !== -1) {
        const trgtIndex = (currentIndex + 1) % Nav.length;

        router.push(Nav[trgtIndex].href!);
      }
    },
    onSwipedRight: () => {
      // 이전 메뉴로 이동
      if (currentIndex !== -1) {
        const trgtIndex = (currentIndex - 1 + Nav.length) % Nav.length;

        router.push(Nav[trgtIndex].href!);
      }
    },
    delta: 100,
  });

  return <div {...swipeHandler}>{children}</div>;
};

export default SwipeRouter;
