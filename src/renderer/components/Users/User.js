import React from 'react';

import classes from './Users.module.scss';

const User = (props) => {
  console.log(props.user);

  return (
    <li className={classes['table-row']}>
      <div className={`${classes.col} ${classes['col-1']}`}>
        {props.user.admin.toString()}
      </div>
      <div className={`${classes.col} ${classes['col-2']}`}>
        {props.user.firstname}
      </div>
      <div className={`${classes.col} ${classes['col-3']}`}>
        {props.user.lastname}
      </div>
      <div className={`${classes.col} ${classes['col-4']}`}>
        {props.user.mail}
      </div>
      {/* <div>{props.user.created}</div> */}
    </li>
  );
};

export default User;
