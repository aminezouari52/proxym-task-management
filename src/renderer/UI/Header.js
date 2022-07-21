import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../store/auth-context';
import classes from './Header.module.scss';

const Header = (props) => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };

  const IS_ADMIN = JSON.parse(localStorage.getItem('user')).admin;

  return (
    <div className={classes.navMenu}>
      <a className={classes.user}>
        Logged in as <strong>{IS_ADMIN ? 'admin' : 'dev'}</strong>
      </a>

      <NavLink activeClassName={classes.active} to="/" exact>
        activity
      </NavLink>
      <NavLink activeClassName={classes.active} to="/projects">
        Tasks
      </NavLink>
      <NavLink activeClassName={classes.active} to="/users">
        Users
      </NavLink>
      <a onClick={logoutHandler}>Sign out</a>
    </div>
  );
};

export default Header;
