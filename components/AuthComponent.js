import React from "react";
import { Button } from "antd";

function AuthComponent({ children, shape, icon, size, type }) {
  return (
    <Button type={type} shape={shape} icon={icon} size={size}>
      {children}
    </Button>
  );
}

export default AuthComponent;
