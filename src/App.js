import React, { useState } from 'react'

import Login from './components/Login/Login'
import classes from './App.module.css'
import Home from './components/Home/Home'

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
      {/* {!logged && <Login onLog={logState} />} */}
      {/* {isAdmin && <Home onLogout={logOutHandler} />} */}
      {!isDev && <Dev onClick={logOutHandler} />}
    </div>
    // amine comment
  )
}

export default App
