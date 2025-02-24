import { useQuery } from "@tanstack/react-query";

import chartService from "@/services/chartService";

/**
 * 차트 캐로셀 데이터 쿼리
 */
export const getChartCarouselItemsQuery = () => {
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
