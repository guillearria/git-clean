import React, { useState } from "react";
import { Layout, Button } from "antd";
import { GithubFilled, GithubOutlined } from "@ant-design/icons";

import "./App.css";

const { Header, Footer, Content } = Layout;

function App() {
  const [status, setStatus] = useState();
  const [token, setToken] = useState(null);

  return (
    <Layout className="App">
      <Header className="App-header">
        <h1>GitClean</h1>
      </Header>
      <Content className="App-content">
        <h1>Simple GitHub organization. Powerful results.</h1>
        <p>
          Easily organize your GitHub profile by storing or deleting old
          repositories.
        </p>
        <Button type="primary" shape="round" icon={<GithubOutlined />}>
          TRY NOW
        </Button>
      </Content>
      <Footer className="App-footer">
        <a href="https://github.com/arriadevoe/git-clean">
          <GithubFilled />
        </a>
      </Footer>
    </Layout>
  );
}

export default App;
