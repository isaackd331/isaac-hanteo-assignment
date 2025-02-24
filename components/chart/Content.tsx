"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import classNames from "classnames";

import { IChartContent } from "@/interface/chart/interface";

const Content = ({ id, thumbPath, title }: IChartContent) => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push(`/chart/${id}`);
  };

  return (
    <article
      className={classNames(
        "flex h-[4rem] items-center bg-gr-50 overflow-hidden rounded-[0.5rem] gap-x-[1rem]",
      )}
      onClick={onClickHandler}
    >
      <div className={classNames("relative w-[5rem] h-full flex-shrink-0")}>
        <Image src={thumbPath} alt={`차트-컨텐츠-${title}-섬내일`} fill />
      </div>

      <span
        className={classNames("font-[600] text-[1.2rem] text-gr-900 truncate")}
      >
        {title}
      </span>
    </article>
  );
};

export default Content;
