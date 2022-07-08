import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { encode, decode, Base64 } from 'js-base64';

import FilterProjects from './FilterProjects';
import AddProject from './AddProject';
import Project from './Project';
import Card from '../../components/UI/Card';
import classes from './Projects.module.scss';
import { object } from 'prop-types';

const Projects = (props) => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetchProjects();
    // return () => {
    //   DUMMY_USERS = [];
    // };
  }, []);

  const BASE_URL = 'http://localhost/redmine';

  async function fetchProjects() {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Base64.btoa(`${'admin'}:${'12345678'}`)}`,
      },
    };
    const { data } = await axios.get(`${BASE_URL}/projects.json`, config);

    const transformedProjects = data.projects.map((project) => {
      return {
        id: project.id,
        name: project.name,
        description: project.description,
        status: project.status,
        is_public: project.is_public,
        created_on: project.created_on,
      };
    });
    console.log(data.projects);
    setProject(transformedProjects);
  }

  return (
    <div className={classes.container}>
      <h2>Projects</h2>
      <AddProject />
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
