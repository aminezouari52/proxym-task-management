import React, { useState } from 'react'
import axios from 'axios'
import { encode, decode, Base64 } from 'js-base64'

import Login from './components/Login/Login'
import Admin from './components/Admin/Admin'
import Dev from './components/Dev/Dev'
import Projects from './components/Projects/Projects'
import Users from './components/Users/Users'
import Header from './components/UI/Header'
import classes from './App.module.scss'

function App() {
  const [logged, setLogged] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isDev, setIsDev] = useState(false)
  const [projects, setProjects] = useState(false)
  const [users, setUsers] = useState(false)

  const logState = (uName, pWord) => {
    if (uName === 'a') {
      setIsAdmin(true)
      setLogged(true)
    }
    if (uName === 'd') {
      setIsDev(true)
      setLogged(true)
    }

    fetchUsers(uName, pWord)
  }

  const logOutHandler = () => {
    setIsDev(false)
    setIsAdmin(false)
    setLogged(false)
    setProjects(false)
    setUsers(false)
  }

  const showProjectHandler = () => {
    setIsDev(false)
    setIsAdmin(false)
    setLogged(true)
    setProjects(true)
    setUsers(false)
  }

  const showUsersHandler = () => {
    setIsDev(false)
    setIsAdmin(false)
    setLogged(true)
    setProjects(false)
    setUsers(true)
  }

  const BASE_URL = 'http://localhost/redmine'

  async function fetchUsers(username, password) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Base64.btoa(`${username}:${password}`)}`,
      },
    }
    const { data } = await axios.get(`${BASE_URL}/my/account.json`, config)

    if (data.user.admin) {
      setIsAdmin(true)
      setIsDev(false)
      setLogged(true)
    } else {
      setIsAdmin(false)
      setIsDev(true)
      setLogged(true)
    }
    console.log(data.user)
  }

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
      {users && <Users />}
      {projects && <Projects />}
      {!logged && <Login onLog={logState} />}
      {isAdmin && <Admin />}
      {isDev && <Dev />}
    </div>
  )
}

export default App
