"use client";

import {
  isServer,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

let browserQueryClient: QueryClient | undefined = undefined;

const makeQueryClient = () => {
  return new QueryClient();
};

/**
 * SSR/CSR 환경 구분 React-Query 환경 세팅 함수
 */
const getQueryClient = () => {
  if (isServer) return makeQueryClient();
  else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
};

/**
 * Next.js 대응 React-Query 환경 세팅 컴포넌트
 */
const QueryProvider = ({ children }: React.PropsWithChildren) => {
  const client = getQueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
