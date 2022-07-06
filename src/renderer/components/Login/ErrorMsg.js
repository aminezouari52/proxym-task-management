import React from 'react';

import classes from './ErrorMsg.module.scss';

const ErrorMsg = (props) => {
  return (
    <div className={classes.error}>
      {/* <div>{props.title}</div> */}
      <p>{props.message}</p>
    </div>
  );
};

export default ErrorMsg;
