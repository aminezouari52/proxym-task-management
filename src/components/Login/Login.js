import React from 'react'

import classes from './Login.module.css'

const Login = () => {
  return (
    <form className={classes.container}>
      <h3>Welcome!</h3>
      <label htmlFor="login">Username</label>
      <input type="textarea" id="login"></input>
      <label htmlFor="password">Password</label>
      <input type="password" id="password"></input>
      <button type="submit">Login</button>
      <h6>
        dont have an account?<span>sign in</span>
      </h6>
    </form>
  )
}

export default Login
