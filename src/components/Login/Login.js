import React, { useState } from 'react'

import classes from './Login.module.css'
import Card from '../Card/Card'

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  const loginHandler = (event) => {
    event.preventDefault()
    props.onLog(username, password)
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={loginHandler}>
        <h3>Welcome!</h3>
        <label htmlFor="login">Username</label>
        <input
          type="textarea"
          id="login"
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={passwordChangeHandler}
        ></input>
        <button type="submit">Login</button>
        <h6>
          dont have an account?<span>sign in</span>
        </h6>
      </form>
    </Card>
  )
}

export default Login
