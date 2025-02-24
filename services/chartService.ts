import http from "./http";

import { ICarouselItem } from "@/interface/common/carousel";
import { IChartContent, IGetChartContents } from "@/interface/chart/interface";

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

/**
 * 차트 컨텐츠 데이터 GET 서비스
 */
const getChartContents = (params: IGetChartContents) => {
  return http.get<IChartContent[]>("/chart/contents", {
    headers: {
      isMock: true,
    },
    params,
  });
};

const chartService = { getChartCarouselItems, getChartContents };

export default chartService;
