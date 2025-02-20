"use client";

import { useState, useEffect } from "react";

/**
 * Msw 사용 여부 결정 상수
 * false일 경우, Msw로의 모킹을 사용하지 않음
 */
const isMockingMode = process.env.NEXT_PUBLIC_API_MOCKING === "enabled";

/**
 * Next.js 대응 Msw 환경 세팅 컴포넌트
 */
const MswProvider = ({ children }: React.PropsWithChildren) => {
  const [isReady, setIsReady] = useState<boolean>(() => !isMockingMode);

  useEffect(() => {
    const init = async () => {
      if (isMockingMode) {
        const initMsw = await import("./index").then((res) => res.initMsw);
        await initMsw();
        setIsReady(true);
      }
    };

    if (!isReady) init();
  }, [isReady]);

  return isReady ? <>{children}</> : null;
};

export default MswProvider;
