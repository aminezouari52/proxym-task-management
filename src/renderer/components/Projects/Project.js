import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classes from './Projects.module.scss';

const Project = (props) => {
  const date = moment(props.project.created_on).format('MMMM D, YYYY');

  return (
    <li className={classes['table-row']}>
      <div className={`${classes.col} ${classes['col-1']}`}>
        {props.project.id}
      </div>
      <div className={`${classes.col} ${classes['col-2']}`}>
        {props.project.name}
      </div>
      <div className={`${classes.col} ${classes['col-3']}`}>
        {props.project.description}
      </div>
      <div className={`${classes.col} ${classes['col-4']}`}>
        {props.project.is_public.toString()}
      </div>
      <div className={`${classes.col} ${classes['col-5']}`}>{date}</div>
    </li>
  );
};

export default Project;
