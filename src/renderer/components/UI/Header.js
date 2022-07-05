import React from 'react'

import classes from './Header.module.scss'
import Card from './Card'
import Button from './Button'

const Header = (props) => {
  return (
    <Card className={classes.header}>
      <div className={classes.item}>
        Logged in as <strong>{props.userLogged}</strong>
      </div>
      <div className={classes.item} onClick={props.showProject}>
        Projects
      </div>
      <div className={classes.item} onClick={props.showUsers}>
        Users
      </div>
      <div className={`${classes.item} ${classes.jumpto}`}>
        Jump to Project...
      </div>
      <Button
        type="button"
        className={`${classes.signout}`}
        onClick={props.onLogout}
      >
        Sign out
      </Button>
    </Card>
  )
}

export default Header
