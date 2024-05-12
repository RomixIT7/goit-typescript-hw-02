import { FC } from "react";

import css from "./ErrorMessage.module.css";

const ErrorMessage: FC = () => {
  return (
    <p className={css.errorMsg}>
      <span className={css.errorIcon}>&#10060;</span> <br />
      Sorry, something went wrong. Try to reload your page!
    </p>
  );
};

export default ErrorMessage;
