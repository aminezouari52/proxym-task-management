import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.scss';
import Card from './Card';
import Button from './Button';

const Header = (props) => {
  return (
    <div className={classes.navMenu}>
      <NavLink to="/dev">
        Logged in as <strong>{props.userLogged}</strong>
      </NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/users">Users</NavLink>
      <a>Jump to Project...</a>
      <NavLink to="/">Sign out</NavLink>
    </div>
  );
};

export default Header;
