import React, { useState, useEffect } from "react";
import { Layout, Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const { Content } = Layout;
const CLIENT_ID = "7fe013c90e0777329367";
const REDIRECT_URI = "http://localhost:3000/";

function App() {
  const [status, setStatus] = useState("unauthorized");
  const [token, setToken] = useState(null);

  useEffect(() => {
    const code =
      window.location.href.match(/code=(.*)/) &&
      window.location.href.match(/code=(.*)/)[1];
    if (code) {
      setStatus("loading");
      fetch(`http://git-clean.herokuapp.com/authenticate/${code}`)
        .then((res) => res.json())
        .then((res) => {
          setToken(res.token);
          setStatus("authorized");
        });
    }
  }, []);

  let content = (
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
  );

  if (status === "loading") {
    content = (
      <Content>
        <h1>Loading....</h1>
      </Content>
    );
  } else if (token && status === "authorized") {
    content = (
      <Content>
        <h1>GitHub access authorized.</h1>
        <p>Token: {token}</p>
      </Content>
    );
  }

  return (
    <Layout className="screen">
      <Header title="GitClean" />
      {content}
      <Footer />
    </Layout>
  );
}

export default App;
