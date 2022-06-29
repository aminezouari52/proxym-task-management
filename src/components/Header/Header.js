import React from 'react'

import classes from './Header.module.css'

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.item}>
        Logged in as <strong>Admin</strong>
      </div>
      <div className={`${classes.item} ${classes.jumpto}`}>
        Jump to Project...
      </div>
      <button
        className={`${classes.item} ${classes.signout}`}
        onClick={props.onLogout}
      >
        Sign out
      </button>
    </div>
  )
}

export default Header
