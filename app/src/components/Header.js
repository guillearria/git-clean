import React from "react";
import { Layout } from "antd";

import "./Header.css";

const { Header } = Layout;

function MainHeader(props) {
  return (
    <Header className="header">
      <h1 className="header-title">{props.title}</h1>
    </Header>
  );
}

export default MainHeader;
