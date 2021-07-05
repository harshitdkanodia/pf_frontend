import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { Row, Col } from "antd";
import styles from "../styles/Input.module.css";
function InputComponent({ placeholder, Icon }) {
  return (
    <div>
      {Icon && (
        <Input
          className={styles.inputBox}
          placeholder={placeholder}
          prefix={<Icon />}
        />
      )}
      {!Icon && <Input className={styles.inputBox} placeholder={placeholder} />}
    </div>
  );
}

// InputComponent.propTypes = { placeholder: PropTypes.string };

export default InputComponent;
