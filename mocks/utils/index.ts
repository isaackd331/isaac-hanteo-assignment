/**
 * Msw Starter
 * SSR/CSR 구분하여 Msw 환경 구축
 */
export const initMsw = async () => {
  // SSR 환경 구축
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen();
  }
  // CSR 환경 구축
  else {
    const { browser } = await import("./browser");
    browser.start();
  }
};
