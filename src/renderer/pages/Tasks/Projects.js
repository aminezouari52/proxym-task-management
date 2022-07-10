import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { encode, decode, Base64 } from 'js-base64';

import FilterProjects from './FilterProjects';
import AddTask from './AddTask';
import Project from './Project';
import Card from '../../components/UI/Card';
import classes from './Projects.module.scss';
import { object } from 'prop-types';
import ProjectContext from 'renderer/store/project-context';
import TaskContext from 'renderer/store/tasks-context';

const Projects = (props) => {
  const projectCtx = useContext(ProjectContext);
  const taskCtx = useContext(TaskContext);

  useEffect(() => {
    taskCtx.Tasks.then((e) => {
      setProject(e);
    });
  }, []);
  const [project, setProject] = useState([]);

  return (
    <div className={classes.container}>
      <h2>Tasks</h2>
      <AddTask />
      {/* <FilterProjects data={project} /> */}
      <ul className={classes['responsive-table']}>
        <li className={classes['table-header']}>
          <div className={`${classes.col} ${classes['col-1']}`}>ID</div>
          <div className={`${classes.col} ${classes['col-2']}`}>Name</div>
          <div className={`${classes.col} ${classes['col-3']}`}>
            Description
          </div>
          <div className={`${classes.col} ${classes['col-4']}`}>status</div>
          <div className={`${classes.col} ${classes['col-5']}`}>Created on</div>
        </li>

        {project.map((projects) => (
          <Project key={Math.random().toString()} project={projects} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
