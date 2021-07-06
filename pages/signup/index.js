import React from "react";
import InputComponent from "../../components/InputComponent";
import MailOutlined from "@ant-design/icons/MailOutlined";
import PhoneOutlined from "@ant-design/icons/PhoneOutlined";
import PasswordComponent from "../../components/PasswordComponent";
import DateComponent from "../../components/DateComponent";
import CheckboxComponent from "../../components/CheckboxComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { Row, Space } from "antd";
import Link from "next/link";
import { Path } from "../../controller/utilities";
import {
  GoogleOutlined,
  FacebookFilled,
  TwitterOutlined,
} from "@ant-design/icons";

function index() {
  return (
    <Row justify="center">
      <h1 style={{ color: "white" }}>SIGN UP</h1>
      <Space direction="vertical" size={16} style={{ width: "90%" }}>
        <InputComponent placeholder="Email" Icon={MailOutlined} />
        <InputComponent placeholder="Phone" Icon={PhoneOutlined} />
        <PasswordComponent placeholder="Password" />
        <DateComponent />
        <CheckboxComponent
          checkboxText="I accept"
          link={<Link href={Path("/login")}>Terms&Conditions</Link>}
        />
        <CheckboxComponent checkboxText="Subscribe to mobile updatess" />
        <CheckboxComponent checkboxText="Subscribe to newsletter" />
        <ButtonComponent type="primary">SIGN UP</ButtonComponent>
        <Row justify="center">
          <span>-OR-</span>
        </Row>
        <Row justify="center">
          <span>SIGN UP WITH</span>
        </Row>
        <Row justify="center">
          <Space direction="horizontal" style={{ width: "90%" }}>
            <ButtonComponent
              shape="round"
              icon={<GoogleOutlined />}
              size={"large"}
            >
              GOOGLE
            </ButtonComponent>
            <ButtonComponent
              type="primary"
              shape="round"
              icon={<FacebookFilled />}
              size={"large"}
            >
              FACEBOOK
            </ButtonComponent>
            <ButtonComponent
              shape="round"
              icon={<TwitterOutlined />}
              size={"large"}
            >
              TWITTER
            </ButtonComponent>
          </Space>
        </Row>
        <Row justify="center">
          <Link href={Path("/login")}>Already membership ? Login</Link>
        </Row>
      </Space>
    </Row>
  );
}

export default index;
