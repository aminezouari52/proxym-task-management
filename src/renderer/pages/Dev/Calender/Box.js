import React from 'react';

import classes from './Box.module.scss';
import moment from 'moment';

const Box = (props) => {
  console.log(props.day.format('D'));
  return (
    <div className={classes.box}>
      <div className={classes.number}>{props.day.format('D')}</div>
      <div className={classes.task}>{props.date}</div>
    </div>
  );
};

export default Box;
