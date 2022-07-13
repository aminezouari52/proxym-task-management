import React, { useState } from 'react';

import Card from '../components/UI/Card';
import Button from '../../components/UI/Button';
import classes from './LogTime.module.scss';

const LogTime = (props) => {
  // const [logTime, setLogTime] = useState(false);

  // const logTimeHandler = () => {
  //   setLogTime(true);
  // };

  // const onSubmitHandler = (event) => {
  //   event.preventDefault();
  //   setLogTime(false);
  // };

  return (
    <div className={classes.add} onClick={props.onClick}>
      <div className={classes['add-icon']}>+</div>
      <div>Log time</div>
    </div>
  );
};

export default LogTime;
