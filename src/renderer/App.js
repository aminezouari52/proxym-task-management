import React, { useState } from 'react';
import axios from 'axios';
import { encode, decode, Base64 } from 'js-base64';

import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Dev from './components/Dev/Dev';
import Projects from './components/Projects/Projects';
import Users from './components/Users/Users';
// import Card from './components/UI/Ca'
import Header from './components/UI/Header';
import classes from './App.module.scss';

const USERS = [];

function App() {
  const [logged, setLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDev, setIsDev] = useState(false);
  const [isProjects, setIsProjects] = useState(false);
  const [isUsers, setIsUsers] = useState(false);

  const BASE_URL = 'http://localhost/redmine';

  async function fetchUsers(username, password) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Base64.btoa(`${username}:${password}`)}`,
      },
    };
    const { data } = await axios.get(`${BASE_URL}/my/account.json`, config);

    if (data.user.admin) {
      setIsAdmin(true);
      setIsDev(false);
      setLogged(true);
    } else {
      setIsAdmin(false);
      setIsDev(true);
      setLogged(true);
    }

    localStorage.setItem('api', data.user.api_key);
  }

  const logState = (uName, pWord) => {
    fetchUsers(uName, pWord);
  };

  const logOutHandler = () => {
    setIsDev(false);
    setIsAdmin(false);
    setLogged(false);
    setIsProjects(false);
    setIsUsers(false);
  };

  const showProjectHandler = () => {
    setIsDev(false);
    setIsAdmin(false);
    setLogged(true);
    setIsProjects(true);
    setIsUsers(false);
  };

  const showUsersHandler = () => {
    setIsDev(false);
    setIsAdmin(false);
    setLogged(true);
    setIsProjects(false);
    setIsUsers(true);
  };

  return (
    <div className={`${classes.app} ${!logged && classes.logged}`}>
      {logged && (
        <Header
          onLogout={logOutHandler}
          userLogged={isAdmin ? 'admin' : 'dev'}
          showProject={showProjectHandler}
          showUsers={showUsersHandler}
        />
      )}
      {isUsers && <Users utilisateur={USERS} />}
      {isProjects && <Projects />}
      {!logged && <Login onLog={logState} />}
      {isAdmin && <Admin />}
      {isDev && <Dev />}
    </div>
  );
}

export default App;
