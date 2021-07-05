// import React from "react";
// import styles from "./button.module.css";

// const Button = ({
//   children,
//   onClick,
//   btnColor = "teal",
//   labelColor,
//   disabled,
//   type = "submit",
//   style,
//   ...props
// }) => {
//   return <button className={styles.btn}>{children || "SIGN UP"}</button>;
// };

// export default Button;
import React from "react";
import { Button } from "antd";
import "antd/lib/button/style/index.css";
import styles from "../styles/button.module.css";

function ButtonComponent({ children, shape, icon, size, type }) {
  return (
    <div>
      <Button type={type} shape={shape} icon={icon} size={size} block>
        {children}
      </Button>
    </div>
  );
}

export default ButtonComponent;
