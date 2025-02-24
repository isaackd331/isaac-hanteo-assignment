"use client";

import Carousel from "@/components/common/carousel/Carousel";

import { useGetChartCarouselItems } from "@/queries/chartQueries";

const Whook = () => {
  const { isLoading, data } = useGetChartCarouselItems();

  return isLoading ? <></> : <Carousel items={data ? data : []} />;
};

export default Whook;
