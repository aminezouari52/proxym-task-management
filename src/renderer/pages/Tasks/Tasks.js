import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { encode, decode, Base64 } from 'js-base64';

// import FilterProjects from './FilterProjects';
import AddTask from './AddTask';
import Task from './Task';
import Card from '../../components/UI/Card';
import classes from './Tasks.module.scss';
import { object } from 'prop-types';
import ProjectContext from 'renderer/store/project-context';
import TaskContext from 'renderer/store/tasks-context';

const Tasks = (props) => {
  const [task, setTask] = useState([]);

  const projectCtx = useContext(ProjectContext);
  const taskCtx = useContext(TaskContext);

  useEffect(() => {
    taskCtx.Tasks.then((event) => {
      setTask(event);
    });
  }, []);

  return (
    <div className={classes.container}>
      <h2>Tasks</h2>
      <AddTask />
      {/* <FilterTasks data={task} /> */}
      <ul className={classes['responsive-table']}>
        <li className={classes['table-header']}>
          <div className={`${classes.col} ${classes['col-1']}`}>ID</div>
          <div className={`${classes.col} ${classes['col-2']}`}>Tracker</div>
          <div className={`${classes.col} ${classes['col-3']}`}>Subject</div>
          <div className={`${classes.col} ${classes['col-4']}`}>Status</div>
          <div className={`${classes.col} ${classes['col-5']}`}>Priority</div>
        </li>

        {task.map((tasks) => (
          <Task key={Math.random().toString()} task={tasks} />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
