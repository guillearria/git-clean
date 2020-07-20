import React, { useState, useEffect } from "react";
import { Layout, Button } from "antd";
import { GithubFilled, GithubOutlined } from "@ant-design/icons";

import "./App.css";

const { Header, Footer, Content } = Layout;
const CLIENT_ID = "7fe013c90e0777329367";
const REDIRECT_URI = "http://localhost:3000/";

function App() {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const code =
      window.location.href.match(/?code=(.*)/) &&
      window.location.href.match(/?code=(.*)/)[1];
    if (code) {
      setLoading(true);
      fetch(`http://git-clean.herokuapp.com/authenticate/${code}`)
        .then((res) => res.json())
        .then((token) => {
          setToken(token);
          setLoading(false);
        });
    }
  }, []);

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
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
        >
          <Button type="primary" shape="round" icon={<GithubOutlined />}>
            TRY NOW
          </Button>
        </a>
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
