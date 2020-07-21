import React, { useState, useEffect } from "react";
import { Layout, Spin } from "antd";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import LandingScreen from "./screens/LandingScreen";
import Dashboard from "./screens/Dashboard";

// const { Content } = Layout;

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

  let content = <LandingScreen />;

  if (status === "loading") {
    content = (
      <Layout>
        <Spin size="large" />
      </Layout>
    );
  } else if (token && status === "authorized") {
    content = <Dashboard token={token} />;
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
