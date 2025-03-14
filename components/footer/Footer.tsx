import classNames from "classnames";

/**
 * 최하단 푸터
 */
const Footer = () => {
  return (
    <footer
      className={classNames(
        "fixed bottom-0 left-0 flex justify-center items-center w-full h-[5rem] bg-gr-400 text-gr-900 z-[5]",
      )}
    >
      최하단 푸터 영역
    </footer>
  );
};

export default Footer;
