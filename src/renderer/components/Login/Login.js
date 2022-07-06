import React, { useState, useRef } from 'react';

import ErrorMsg from './ErrorMsg';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Login.module.scss';

const Login = (props) => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const [error, setError] = useState('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const usernameChangeHandler = (event) => {
  //   setUsername(event.target.value);
  // };

  // const passwordChangeHandler = (event) => {
  //   setPassword(event.target.value);
  // };

  const loginHandler = (event) => {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (
      enteredUsername.trim().length === 0 ||
      enteredPassword.trim().length === 0 ||
    ) {
      setError({
        title: 'Empty input',
        message: 'Please fill in the username and the password',
      });

      if (enteredUsername !== props.username) return;
    }

    props.onLog(enteredUsername, enteredPassword);
    usernameInputRef.current.value = '';
    passwordInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={loginHandler} className={error && classes.error}>
        <h2>Log in your account!</h2>
        <div className={classes.block}>
          <label htmlFor="login">
            <h4>Username</h4>
          </label>
          <input
            type="textarea"
            id="login"
            ref={usernameInputRef}
            // onChange={usernameChangeHandler}
          ></input>
        </div>

        <div className={classes.block}>
          <label htmlFor="password">
            <h4>Password</h4>
          </label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            // onChange={passwordChangeHandler}
          ></input>
        </div>

        {error && (
          <ErrorMsg
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}

        <Button type="submit" className={classes.button}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
