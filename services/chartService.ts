import http from "./http";

import { ICarouselItem } from "@/interface/common/carousel";

/**
 * 차트 캐로셀 데이터 GET 서비스
 */
const getChartCarouselItems = () => {
  return http.get<ICarouselItem[]>("/chart/carousel", {
    headers: {
      isMock: true,
    },
  });
};

const chartService = { getChartCarouselItems };

export default chartService;
