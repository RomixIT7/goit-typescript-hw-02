import { FC } from "react";

import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClickLoadMoreBtn: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClickLoadMoreBtn }) => {
  return (
    <button
      type="button"
      className={css.loadMoreBtn}
      onClick={onClickLoadMoreBtn}
    >
      LoadMoreBtn
    </button>
  );
};

export default LoadMoreBtn;
