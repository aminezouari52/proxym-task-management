import React, { useState } from 'react'

import Login from './components/Login/Login'
import classes from './App.module.css'
import Home from './components/Home/Home'

function App() {
  const [isAdmin, setIsAdmin] = useState(false)

  const authentification = {
    username: 'admin',
    password: 'admin',
  }

  const logState = (uName, pWord) => {
    if (
      uName === authentification['username'] &&
      pWord === authentification['password']
    )
      setIsAdmin(true)
  }

  return (
    <div className={classes.app}>
      {/* {!isAdmin && <Login onLog={logState} />} */}
      {!isAdmin && <Home />}
    </div>
  )
}

export default App
