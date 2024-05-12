import { FC } from "react";

import { Hourglass } from "react-loader-spinner";

import css from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      colors={["darkviolet", "blue"]}
    />
  );
};

export default Loader;
