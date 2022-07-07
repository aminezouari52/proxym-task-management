import React, { useState } from 'react';

import classes from './Task.module.scss';

const Task = (props) => {
    
  return (
    <div key={Math.random().toString()} className={classes.task} onClick={}>
      <div>{props.task}</div>
      <div></div>
    </div>
  );
};

export default Task;
