import React from "react";

//Styles
import styles from "app/styles/min/Input.module.css";

const ErrorMsg = ({errors}) => {
  return <p className={styles.errorMsg}>{ errors.todo?.type === "pattern" && "Accept only Alphabet and Number!!!"}</p>;
};

export default ErrorMsg;
