import React, { useState } from 'react'

import classes from './Login.module.scss'
import Card from '../UI/Card'
import Button from '../UI/Button'

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
        <div className={classes.block}>
          <label htmlFor="login">Username</label>
          <input
            type="textarea"
            id="login"
            onChange={usernameChangeHandler}
          ></input>
        </div>

        <div className={classes.block}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
          ></input>
        </div>

        <Button type="submit" className={classes.button}>
          Login
        </Button>
      </form>
    </Card>
  )
}

export default Login
