import React, { useState } from 'react';

import Task from './Task';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import classes from './Tasks.module.scss';

const Tasks = (props) => {
  return (
    <Card className={classes.tasks}>
      <h5>Tasks</h5>
      {props.tasks.map((task) => (
        <Task task={task} />
      ))}
      <button onClick={props.onLength}>
        {props.length === 2 ? 'readmore' : 'readless'}
      </button>
    </Card>
  );
};
export default Tasks;
