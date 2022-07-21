import { Fragment, useContext, useState, useEffect } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import AuthContext from './store/auth-context';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Dev from './pages/Dev/Dev';
import Modal from './UI/Modal';
import classes from './App.module.scss';
import LogContext from './store/log-contex';

function App() {
  const logCtx = useContext(LogContext);
  const [log, setLog] = useState([]);
  const authCtx = useContext(AuthContext);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    logCtx.logs.then((event) => {
      setLog(event);
    });
  }, []);

  const hideHandler = () => {
    setModal(false);
  };

  const USER_ID = authCtx.isLoggedIn
    ? JSON.parse(localStorage.getItem('user')).id
    : false;

  log.map((e) => {
    if (e.user === USER_ID && e.hours < 8) {
      setTimeout(() => {
        setModal(true);
      }, 1000);
    }
  });

  return (
    <div className={`${classes.app} ${!authCtx.isLoggedIn && classes.logged}`}>
      {modal && <Modal onConfirm={hideHandler} />}

      <Switch>
        {authCtx.isLoggedIn && (
          <Route path="/">
            <Home />
          </Route>
        )}

        {!authCtx.isLoggedIn && (
          <Route path="/">
            <Login />
          </Route>
        )}
      </Switch>
    </div>
  );
}

export default App;
