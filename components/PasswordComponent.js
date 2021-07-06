import React from "react";
import { Input } from "antd";
import styles from "../styles/Input.module.css";

function PasswordComponent({ placeholder }) {
  return (
    <div>
      {" "}
      <Input.Password className={styles.inputBox} placeholder={placeholder} />
    </div>
  );
}

export default PasswordComponent;
