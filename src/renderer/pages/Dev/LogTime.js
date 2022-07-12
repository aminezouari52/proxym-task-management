import React, { useState } from 'react';

import Card from '../components/UI/Card';
import classes from './LogTime.module.scss';
import Button from '../../components/UI/Button';

const LogTime = (props) => {
  const [logTime, setLogTime] = useState(false);

  const logTimeHandler = () => {
    setLogTime(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setLogTime(false);
  };

  return (
    <>
      {!logTime && (
        <div className={classes.add} onClick={logTimeHandler}>
          <div className={classes['add-icon']}>+</div>
          <div>Log time</div>
        </div>
      )}

      {logTime && (
        <div className={classes.form}>
          <h3>Spent time</h3>
          <form onSubmit={onSubmitHandler}>
            <div className={classes.block}>
              <label>Project</label>
              <input type="textarea"></input>
            </div>

            <div className={classes.block}>
              <label>Task</label>
              <input type="textarea"></input>
            </div>

            <div className={classes.block}>
              <label>Activity</label>
              <textarea type="textarea"></textarea>
            </div>
            <div className={classes.block}>
              <label>Date</label>
              <input type="date"></input>
            </div>
            <div className={classes.block}>
              <label>Hours</label>
              <input type="number" min="0" max="99"></input>
            </div>
            <Button type="submit" className={classes.button}>
              Create
            </Button>
            <Button
              type="button"
              className={classes.close}
              onClick={() => setLogTime(false)}
            >
              Cancel
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default LogTime;
