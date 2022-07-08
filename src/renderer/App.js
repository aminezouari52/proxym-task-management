import { useContext } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import AuthContext from './store/auth-context';

import Home from './pages/Home';
import Login from './components/Login/Login';
// import Admin from './components/Admin/Admin';
import Dev from './pages/Dev/Dev';
import Projects from './pages/Projects/Projects';
import Users from './pages/Users/Users';
// import Card from './components/UI/Ca'
import Header from './components/UI/Header';
import classes from './App.module.scss';
import '../../node_modules/bootstrap/scss/bootstrap.scss';

const USERS = [];

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className={`${classes.app} ${!authCtx.isLoggedIn && classes.logged}`}>
      <Switch>
        {/* <Route path="/">
          <Home />
        </Route> */}

        <Route path="/">
          <Login />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>

      {/* {!logged && <Login onLog={onLogHandler} />} */}

      {/* {isUsers && <Users utilisateur={USERS} />} */}
      {/* {isProjects && <Projects />} */}
      {/* {isAdmin && <Admin />} */}
      {/* {isDev && <Dev />} */}
    </div>
  );
}

export default App;
