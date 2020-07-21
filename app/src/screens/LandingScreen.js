import React from "react";
import { Layout, Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";

import "./LandingScreen.css";

const { Content } = Layout;
const CLIENT_ID = "7fe013c90e0777329367";
const REDIRECT_URI = "http://localhost:3000/";

function LandingScreen() {
  return (
    <Layout>
      <Content className="content">
        <h2>Simple GitHub organization. Powerful results.</h2>
        <p>
          Easily organize your GitHub profile by storing or deleting old
          repositories.
        </p>
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
        >
          <Button type="primary" shape="round" icon={<GithubOutlined />}>
            TRY NOW
          </Button>
        </a>
      </Content>
    </Layout>
  );
}

export default LandingScreen;
