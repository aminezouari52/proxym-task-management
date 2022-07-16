import React, { useState, useRef, useContext } from 'react';
import axios from 'axios';
import { encode, decode, Base64 } from 'js-base64';
import { useHistory } from 'react-router-dom';

import ErrorMsg from './ErrorMsg';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import classes from './Login.module.scss';
import AuthContext from '../../store/auth-context';

const Login = (props) => {
  let history = useHistory();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

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
      authCtx.login(data);
    } catch (error) {
      alert('wrong username or password');
    }
  }

  const [error, setError] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (
      enteredUsername.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      setError({
        title: 'Empty input',
        message: 'Please fill in the username and the password',
      });
      return;
    }

    if (
      enteredUsername.trim().length < 5 ||
      enteredPassword.trim().length < 6
    ) {
      setError({
        title: 'short input',
        message: 'username or password minimum should be at least 6 characters',
      });
      return;
    }

    fetchUsers(enteredUsername, enteredPassword);

    usernameInputRef.current.value = '';
    passwordInputRef.current.value = '';

    history.push('/');
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <Card className={classes.login}>
      <form
        onSubmit={submitHandler}
        className={error ? classes.error : undefined}
      >
        <h2>Log in your account!</h2>
        <div className={classes.block}>
          <label htmlFor="username">
            <h4>Username</h4>
          </label>
          <input
            type="textarea"
            id="username"
            ref={usernameInputRef}
            onClick={errorHandler}
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
            onClick={errorHandler}
            // onChange={passwordChangeHandler}
          ></input>
        </div>

        {error ? (
          <ErrorMsg
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        ) : undefined}

        <Button type="submit" className={classes.button}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
