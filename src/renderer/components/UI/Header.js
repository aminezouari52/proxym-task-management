import React from 'react';

import classes from './Header.module.scss';
import Card from './Card';
import Button from './Button';

const Header = (props) => {
  return (
    <div className={classes.navMenu}>
      <div>
        Logged in as <strong>{props.userLogged}</strong>
      </div>
      <div onClick={props.showProject}>Projects</div>
      <div onClick={props.showUsers}>Users</div>
      <div>Jump to Project...</div>
      <div onClick={props.onLogout}>Sign out</div>
      {/* <div className={classes.dot}></div> */}
    </div>
  );
};

export default Header;
