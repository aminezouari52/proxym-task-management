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
import '../../node_modules/bootstrap/scss/bootstrap.scss';

const USERS = [];

function App() {
  const storedUserInformation = localStorage.getItem('isLoggedIn');

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
    try {
      const { data } = await axios.get(`${BASE_URL}/my/account.json`, config);
      if (data.user.admin) {
        setIsAdmin(true);
        setIsDev(false);
        setLogged(true);
        localStorage.setItem('role', 'admin');
      } else {
        setIsAdmin(false);
        setIsDev(true);
        setLogged(true);
        localStorage.setItem('role', 'dev');
      }

      // localStorage.setItem('api', data.user.api_key);
      localStorage.setItem('isLoggedIn', '1');
    } catch (error) {
      alert('wrong username or password');
    }
  }

  const onLogHandler = (uName, pWord) => {
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

  const devHandler = () => {
    setIsDev(true);
    setIsAdmin(false);
    setLogged(true);
    setIsProjects(false);
    setIsUsers(false);
  };

  const homeHandler = () => {
    setIsDev(true);
    setIsProjects(false);
    setIsUsers(false);
  };

  return (
    <div className={`${classes.app} ${!logged && classes.logged}`}>
      {logged && (
        <Header
          home={homeHandler}
          onLogout={logOutHandler}
          userLogged={isAdmin ? 'admin' : 'dev'}
          showProject={showProjectHandler}
          showUsers={showUsersHandler}
        />
      )}
      {isUsers && <Users utilisateur={USERS} />}
      {isProjects && <Projects />}
      {!logged && <Login onLog={onLogHandler} />}
      {isAdmin && <Admin />}
      {isDev && <Dev />}
    </div>
  );
}

export default App;
