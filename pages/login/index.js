import React from "react";
import InputComponent from "../../components/InputComponent";
import PasswordComponent from "../../components/PasswordComponent";
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
    <>
      <Row justify="center" className="login">
        <h1 style={{ color: "white" }}>LOGIN</h1>
        <Space direction="vertical" size={16} style={{ width: "90%" }}>
          <InputComponent placeholder="Email / Mobile Number" />
          <PasswordComponent placeholder="Passowrd" />
          <Row justify="end">
            <Link href={Path("/")}>Forgot Password? click here..</Link>
          </Row>
          <ButtonComponent type="primary">LOGIN</ButtonComponent>
          <Row justify="center">OR</Row>
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
            <Link href={Path("/")}>Not a member? SIGN UP!</Link>
          </Row>
        </Space>
      </Row>
    </>
  );
}

export default index;
