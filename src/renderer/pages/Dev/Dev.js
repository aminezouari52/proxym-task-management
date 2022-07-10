import React, { useState } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

import Users from '../Users/Users';
import Header from '../../components/UI/Header';
import AddTask from './AddTask';
import Calender from './Calender/Calender';
import Tasks from './Tasks';
import Card from '../../components/UI/Card';
import classes from './Dev.module.scss';
import Projects from '../Projects/Projects';

const Dev = () => {
  const tasks = [
    'Monitoring systems performance.',
    'Maintain or exceed compliance with industry standards.',
    'Developing and executing project plans.',
    'Monitoring systems performance.',
    'Maintain or exceed compliance with industry standards.',
    'Developing and executing project plans.',
    'Maintain or exceed compliance with industry standards.',
    'Developing and executing project plans.',
  ];

  const [length, setLength] = useState(2);

  const onReadMore = () => {
    if (length === 2) setLength(tasks.length);
    else setLength(2);
  };
  return (
    <>
      <Card className={classes.dev}>
        <AddTask />
        <Calender />
        <Tasks
          tasks={tasks.slice(0, length)}
          onLength={onReadMore}
          length={length}
        />
      </Card>
    </>
  );
};

export default Dev;
