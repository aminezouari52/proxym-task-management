import React, { useState } from 'react';

import Task from './Task';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import classes from './Tasks.module.scss';

const Tasks = (props) => {
  const [length, setLength] = useState(2);

  const onReadMore = () => {
    if (length === 2) setLength(props.tasks.length);
    else setLength(2);
  };
  
  return (
    <Card className={classes.tasks}>
      <h5>Tasks</h5>
      {props.tasks.slice(0, length).map((task) => (
        <Task key={Math.random().toString()} task={...task} />
      ))}
      <button onClick={onReadMore}>
        {length === 2 ? 'readmore' : 'readless'}
      </button>
    </Card>
  );
};
export default Tasks;
