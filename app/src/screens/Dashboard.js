import React from "react";
import { Layout } from "antd";

import "./LandingScreen.css";

const { Content } = Layout;

function LandingScreen(props) {
  return (
    <Content>
      <h1>GitHub access authorized.</h1>
      <p>Token: {props.token}</p>
    </Content>
  );
}

export default LandingScreen;
