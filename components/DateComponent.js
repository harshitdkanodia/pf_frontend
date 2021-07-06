import { DatePicker } from "antd";
import React from "react";
import styles from "../styles/Datepicker.module.css";

function DateComponent() {
  return (
    <div>
      <DatePicker className={styles.datepicker} />
    </div>
  );
}

export default DateComponent;
