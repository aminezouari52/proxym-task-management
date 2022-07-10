import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../store/auth-context';
import classes from './Header.module.scss';

const Header = (props) => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <div className={classes.navMenu}>
      <NavLink activeClassName={classes.active} to="/dev/dev">
        Logged in as <strong>{}</strong>
      </NavLink>
      <NavLink activeClassName={classes.active} to="/dev/projects">
        Projects
      </NavLink>
      <NavLink activeClassName={classes.active} to="/dev/users">
        Users
      </NavLink>
      <a>Jump to Project...</a>
      <a onClick={logoutHandler}>Sign out</a>
    </div>
  );
};

export default Header;
