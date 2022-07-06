import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Tasks.module.scss';

const Task = (props) => {
  return (
    <Card className={classes.tasks}>
      <h5>Tasks assigned to me</h5>
      {props.tasks.map((task) => (
        <div key={Math.random().toString()} className={classes.task}>
          {task}
        </div>
      ))}
      <button onClick={props.onLength}>
        {props.length === 2 ? 'readmore' : 'readless'}
      </button>
    </Card>
  );
};
export default Task;
