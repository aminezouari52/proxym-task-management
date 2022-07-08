import React from 'react';

import classes from './Admin.module.scss';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Dev from '../../pages/Dev/Dev';

const Admin = (props) => {
  const tasks = [
    'Monitoring systems performance.',
    'Maintain or exceed compliance with industry standards.',
    'Developing and executing project plans.',
    'Creating technical specifications.',
  ];

  const devs = ['ahmed', 'amine', 'ons', 'abir'];

  const assignHandler = (event) => {
    event.preventDefault();
    console.log('submitted');
  };

  return (
    <>
      {/* <Card className={classes.admin}>
        <form onSubmit={assignHandler}>
          <label htmlFor="tasks">Choose a task</label>

          <select name="tasks" id="tasks">
            <option value="task0">{tasks[0]}</option>
            <option value="task1">{tasks[1]}</option>
            <option value="task2">{tasks[2]}</option>
            <option value="task3">{tasks[3]}</option>
          </select>

          <label htmlFor="devs">Assign to developer</label>

          <select name="devs" id="devs">
            <option value="dev0">{devs[0]}</option>
            <option value="dev1">{devs[1]}</option>
            <option value="dev2">{devs[2]}</option>
            <option value="dev3">{devs[3]}</option>
          </select>

          <label htmlFor="date">Pick a deadline</label>
          <input type="date" id="date" />

          <Button type="submit">Assign</Button>
        </form>
      </Card> */}
      <Dev />
    </>
  );
};

export default Admin;
