import React, { useState } from 'react'

import Login from './components/Login/Login'
import classes from './App.module.scss'
import Admin from './components/Admin/Admin'
import Dev from './components/Dev/Dev'
import Header from './components/UI/Header'

function App() {
  const [logged, setLogged] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isDev, setIsDev] = useState(false)

  const logState = (uName, pWord) => {
    if (uName === 'admin') {
      setIsAdmin(true)
      setLogged(true)
    }
    if (uName === 'dev') {
      setIsDev(true)
      setLogged(true)
    }
  }

  const logOutHandler = () => {
    setIsDev(false)
    setIsAdmin(false)
    setLogged(false)
  }

  return (
    <div className={classes.app}>
      {logged && <Header onLogout={logOutHandler} />}
      {!logged && <Login onLog={logState} />}
      {isAdmin && <Admin />}
      {isDev && <Dev />}
    </div>
  )
}

export default App
