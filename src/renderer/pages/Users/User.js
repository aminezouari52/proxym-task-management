import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classes from './Users.module.scss';

const User = (props) => {
  const date = moment(props.user.created).format('MMMM D, YYYY');

  return (
    <li className={classes['table-row']}>
      <div className={`${classes.col} ${classes['col-1']}`}>
        {props.user.admin && (
          <FontAwesomeIcon icon={faCheckCircle} className={classes.icon} />
        )}
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
      <div className={`${classes.col} ${classes['col-5']}`}>{date}</div>
    </li>
  );
};

export default User;
