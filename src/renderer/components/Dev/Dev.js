import React, { useState } from 'react';

import AddTask from './AddTask';
import Calender from './Calender/Calender';
import Tasks from './Tasks';
import Card from '../UI/Card';
import classes from './Dev.module.scss';

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

  const [length, setLength] = useState(3);

  const onReadMore = () => {
    if (length === 3) setLength(tasks.length);
    else setLength(3);
  };

  return (
    <Card>
      <AddTask />
      <Calender />
      <Tasks
        tasks={tasks.slice(0, length)}
        onLength={onReadMore}
        length={length}
      />
    </Card>
  );
};

export default Dev;
