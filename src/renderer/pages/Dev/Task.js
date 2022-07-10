import React, { useState } from 'react';

import classes from './Task.module.scss';

const Task = (props) => {
  return (
    <div className={classes.task}>
      <div>{props.task}</div>
      <div></div>
    </div>
  );
};

export default Task;
