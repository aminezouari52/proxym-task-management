import React, { useState } from 'react';

import Card from '../components/UI/Card';
import Button from '../../UI/Button';
import classes from './LogTime.module.scss';

const LogTime = (props) => {
  return (
    <div className={classes.add} onClick={props.onClick}>
      <div className={classes['add-icon']}>+</div>
      <div>Log time</div>
    </div>
  );
};

export default LogTime;
