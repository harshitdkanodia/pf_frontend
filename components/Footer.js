import Link from "next/link";
import styles from "../styles/footer.module.css";
import HomeOutlined from "@ant-design/icons/HomeOutlined";
import SearchOutlined from "@ant-design/icons/SearchOutlined";
import BorderBottomOutlined from "@ant-design/icons/BorderBottomOutlined";
import Image from "next/image";
import { Row, Col, Space } from "antd";

export default function Footer() {
  return (
    <div className="footer">
      <Row justify="center" align="bottom">
        <Row justify="space-between" style={{ width: "90%" }}>
          <div>
            <HomeOutlined />
            Home
          </div>
          <div>
            <SearchOutlined /> Search
          </div>
          <div>
            <SearchOutlined /> Distribute
          </div>
          <div>
            <SearchOutlined /> Festival
          </div>
        </Row>
      </Row>
    </div>
  );
}
