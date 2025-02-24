import classNames from "classnames";

import Content from "./Content";

import { IChartContent } from "@/interface/chart/interface";

/**
 * 차트 컨텐츠 영역 컴포넌트
 */
const Contents = ({ items }: { items: IChartContent[] }) => {
  return (
    <section
      className={classNames(
        "flex flex-col w-full p-[1.5rem] bg-gr-200 gap-y-[1rem] overflow-auto scrollbar-hide",
      )}
    >
      <span className={classNames("font-[600] text-[1.5rem] text-gr-900")}>
        콘텐츠 큐레이션 목록
      </span>

      {items.map((item, index) => {
        return (
          <Content
            key={`chart-content-${item.id}-${index}`}
            id={item.id}
            thumbPath={item.thumbPath}
            title={item.title}
          />
        );
      })}
    </section>
  );
};

export default Contents;
