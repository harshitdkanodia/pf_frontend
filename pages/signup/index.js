import React from "react";
import InputComponent from "../../components/InputComponent";
import Header from "../../components/Header";
import MailOutlined from "@ant-design/icons/MailOutlined";
import PhoneOutlined from "@ant-design/icons/PhoneOutlined";
import PasswordComponent from "../../components/PasswordComponent";
import DateComponent from "../../components/DateComponent";
import CheckboxComponent from "../../components/CheckboxComponent";
import ButtonComponent from "../../components/ButtonComponent";
import Footer from "../../components/Footer";
import { Row, Col, Space } from "antd";
import LayoutComponent from "../../layouts/LayoutComponent";
import Link from 'next/link';
import {Path} from '../../controller/utilities';

function index() {
  return (
    <LayoutComponent>
      <Row align="center">
        <Space direction="vertical" size={16} style={{ width: "90%" }}>
          <InputComponent placeholder="Email" Icon={MailOutlined} />
          <InputComponent placeholder="Phone" Icon={PhoneOutlined} />
          <PasswordComponent placeholder="Passowrd" />
          <DateComponent />
          <CheckboxComponent checkboxText="I accept " />
          <CheckboxComponent checkboxText="Subscribe to mobile updatess" />
          <CheckboxComponent checkboxText="Subscribe to newsletter" />
          <ButtonComponent buttonText="SIGN UP" />
          <Row align="center">
            <div>
              <span>-OR-</span>
            </div>
            <div>
              <span>SIGN UP WITH</span>
            </div>
            {/* <div>
              <span className="icon icon-alipay" />
              <span className="icon icon-taobao" />
              <span className="icon icon-weibo" />
            </div> */}
          </Row>
          <Row align="center">
            <Link href={Path('/login')}>Already membership ? Login</Link>
          </Row>
        </Space>
      </Row>
    </LayoutComponent>
  );
}

export default index;
