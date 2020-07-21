import React, { useEffect, useState } from "react";
import GitHub from "github-api";
import { Layout, Menu } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import "./Dashboard.css";

const { Header, Footer, Content, Sider } = Layout;

function LandingScreen(props) {
  const [userData, setUserData] = useState({});
  const [repos, setRepos] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    let gh = new GitHub({
      token: props.token,
    });

    let auth_user = gh.getUser();

    auth_user.getProfile((err, profile) => {
      console.log(profile);
      setUserData(profile);
    });

    auth_user.listRepos((err, repos) => {
      console.log(repos);
      setRepos(repos);
    });
  }, []);

  const onCollapse = coll => {
    setCollapsed(coll);
  };

  return (
    <Layout>
      <Sider className="side-menu" collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="side-menu-user">
          <img src={userData.avatar_url} alt="avatar" />
          <h1>{userData.login}</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<ExclamationCircleOutlined />}>
            Repositories
          </Menu.Item>
          <Menu.Item key="2" icon={<ExclamationCircleOutlined />}>
            Organizations
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content className="site-layout-content" style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, textAlign: 'center' }}>
            <h2>Your repos:</h2>
            <ul>
              {repos.map((repo) => (
                <li>{repo.full_name}</li>
              ))}
            </ul>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default LandingScreen;
