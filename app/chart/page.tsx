"use client";

import Carousel from "@/components/common/carousel/Carousel";

import { useGetChartCarouselItems } from "@/queries/chartQueries";

const Chart = () => {
  const { isLoading, isFetched } = useGetChartCarouselItems();

  return <div>헬로</div>;
};

export default Chart;
