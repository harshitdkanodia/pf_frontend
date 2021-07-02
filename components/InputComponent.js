import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { Row, Col } from "antd";

function InputComponent({ placeholder, Icon }) {
  return (
      <div>{Icon && <Input placeholder={placeholder} prefix={<Icon />} />}</div>
  );
}

// InputComponent.propTypes = { placeholder: PropTypes.string };

export default InputComponent;
