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
      <Row justify="center">
        <Row
          className={styles.footer_item}
          justify="space-between"
          style={{ width: "90%" }}
        >
          <div>
            <HomeOutlined className={styles.footer_icons} />
            Home
          </div>
          <div>
            <SearchOutlined className={styles.footer_icons} /> Search
          </div>
          <div>
            <SearchOutlined className={styles.footer_icons} /> Distribute
          </div>
          <div>
            <SearchOutlined className={styles.footer_icons} /> Festivals
          </div>
        </Row>
      </Row>
    </div>
  );
}
