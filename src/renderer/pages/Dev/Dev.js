import React, { useState } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

import Users from '../Users/Users';
import Header from '../../components/UI/Header';
import AddTask from './AddTask';
import Calender from './Calender/Calender';
import Tasks from './Tasks';
import Card from '../../components/UI/Card';
import classes from './Dev.module.scss';
import Projects from '../Tasks/Projects';

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

  return (
    <>
      <Card className={classes.dev}>
        <AddTask />
        <Calender />
        <Tasks tasks={tasks} />
      </Card>
    </>
  );
};

export default Dev;
