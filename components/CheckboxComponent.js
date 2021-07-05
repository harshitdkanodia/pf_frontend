import React from "react";
import { Checkbox } from "antd";

function CheckboxComponent({ checkboxText, link }) {
  return (
    <div>
      <Checkbox>
        {checkboxText} {link}
      </Checkbox>
    </div>
  );
}

export default CheckboxComponent;
