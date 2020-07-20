import React, { useEffect, useState } from "react";
import GitHub from "github-api";
import { Layout } from "antd";

import "./LandingScreen.css";

const { Content } = Layout;

function LandingScreen(props) {
  const [userData, setUserData] = useState({});
  const [repos, setRepos] = useState([]);

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

  return (
    <Content>
      <h1>Welcome {userData.login}</h1>
      <img src={userData.avatar_url} alt="avatar" />
      <div>
        <h2>Your repos:</h2>
        <ul>
          {repos.map((repo) => (
            <li>{repo.full_name}</li>
          ))}
        </ul>
      </div>
    </Content>
  );
}

export default LandingScreen;
