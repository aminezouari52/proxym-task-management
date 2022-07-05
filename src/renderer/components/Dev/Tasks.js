import React, { useState } from 'react';

import Card from '../UI/Card';
import classes from './Tasks.module.scss';

const Task = (props) => {
  // const readmore = () => {
  //   if (props.length === 3) props.onRead;
  // };

  return (
    <div>
      <Card className={classes.tasks}>
        <h5>Tasks assigned to me</h5>
        {props.tasks.map((task) => (
          <div key={Math.random().toString()} className={classes.task}>
            {task}
          </div>
        ))}
        <button onClick={props.onLength}>
          {props.length === 3 ? 'readmore' : 'readless'}
        </button>
      </Card>
    </div>
  );
};
export default Task;
