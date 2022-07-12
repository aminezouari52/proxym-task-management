import React, { useState } from 'react';

import classes from './Task.module.scss';

const Task = (props) => {
  return <div className={classes.task}>{props.task}</div>;
};

export default Task;
