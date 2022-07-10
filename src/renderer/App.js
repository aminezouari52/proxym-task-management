import { Fragment, useContext } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import AuthContext from './store/auth-context';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Dev from './pages/Dev/Dev';
import classes from './App.module.scss';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className={`${classes.app} ${!authCtx.isLoggedIn && classes.logged}`}>
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
