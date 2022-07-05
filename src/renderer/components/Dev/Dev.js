import React, { useState } from 'react';

import classes from './Dev.module.scss';
import AddTask from './AddTask';
import Calender from './Calender/Calender';
import Tasks from './Tasks';

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
    <>
      <AddTask />
      <Calender />
      <Tasks
        tasks={tasks.slice(0, length)}
        onLength={onReadMore}
        length={length}
      />
    </>
  );
};

export default Dev;