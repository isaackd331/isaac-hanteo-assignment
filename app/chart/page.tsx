"use client";

import classNames from "classnames";
import InfiniteScroll from "react-infinite-scroller";

import Carousel from "@/components/common/carousel/Carousel";
import Contents from "@/components/chart/Contents";

import {
  useGetChartCarouselItems,
  useGetChartContents,
} from "@/queries/chartQueries";

const Chart = () => {
  const { isLoading: carouselLoading, data: carouselData } =
    useGetChartCarouselItems();
  const {
    isLoading: contentsLoading,
    data: contentsData,
    hasNextPage,
    fetchNextPage,
  } = useGetChartContents();

  return carouselLoading && contentsLoading ? (
    <></>
  ) : (
    <InfiniteScroll
      hasMore={hasNextPage}
      loadMore={() => fetchNextPage()}
      className={classNames("flex flex-col gap-y-[1rem]")}
    >
      <Carousel items={carouselData ? carouselData : []} />
      <Contents items={contentsData ? contentsData.pages.flat() : []} />
    </InfiniteScroll>
  );
};

export default Chart;
