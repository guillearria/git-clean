import React from "react";
import { Layout } from "antd";
import { GithubFilled } from "@ant-design/icons";


import "./Footer.css";

const { Footer } = Layout;

function MainFooter() {
  return (
    <Footer className="footer">
      <a className="footer-link" href="https://github.com/arriadevoe/git-clean">
        <GithubFilled />
      </a>
    </Footer>
  );
}

export default MainFooter;
