import styles from "../styles/Header.module.css";
import Image from "next/image";
import { Row, Space } from "antd";
import Link from "next/link";
import { Path } from "../controller/utilities";

const Header = () => (
  <Row justify="center">
    <Row justify="space-between" style={{ width: "90%" }}>
      <Image src="/pocketfilm_logo.svg" width={100} height={64} />
      <Space>
        <Link href={Path("/")}>SignUp</Link>
        <Link href={Path("/")}>Login</Link>
      </Space>
    </Row>
  </Row>

  // <div className="header" style={styles}>
  //   <div className="header__logo">

  //   </div>
  /* <div className="header__links">
      <Link path="/SignUp" />
    </div> */
  // </div>
);

export default Header;
