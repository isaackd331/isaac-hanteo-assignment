import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import chartService from "@/services/chartService";

import { IChartContent } from "@/interface/chart/interface";

/**
 * 차트 캐로셀 데이터 쿼리
 */
export const useGetChartCarouselItems = () => {
  return useQuery({
    queryKey: ["getChartCarouselItems"],
    queryFn: async () => {
      try {
        const res = await chartService.getChartCarouselItems();

        return res.data;
      } catch (err) {
        console.error(err);
      }
    },
  });
};

/**
 * 차트 컨텐츠 데이터 쿼리
 */
export const useGetChartContents = () => {
  return useInfiniteQuery<IChartContent[], Error>({
    queryKey: ["getChartContents"],
    queryFn: async ({ pageParam = 0 }) => {
      const res = await chartService.getChartContents({
        page: pageParam,
        pageSize: 10,
      });

      return res.data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPages, pages): number | false => {
      const nextPage = pages.length + 1;
      return lastPages.length === 0 ? false : nextPage;
    },
  });
};
