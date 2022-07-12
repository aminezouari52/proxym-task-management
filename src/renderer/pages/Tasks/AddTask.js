import React, { useState } from 'react';

import Card from '../../components/UI/Card';
import classes from './AddTask.module.scss';
import Button from '../../components/UI/Button';

const AddTask = (props) => {
  const [addTask, setAddTask] = useState(false);

  const addTaskHandler = () => {
    setAddTask(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setAddTask(false);
  };

  return (
    <>
      {!addTask && (
        <div className={classes.add} onClick={addTaskHandler}>
          <div className={classes['add-icon']}>+</div>
          <div>New Task</div>
        </div>
      )}

      {addTask && (
        <div className={classes.form}>
          <h3>New Task</h3>
          <form onSubmit={onSubmitHandler}>
            <div className={classes.block}>
              <label>Tracker</label>
              <input
                type="textarea"
                // onChange={usernameChangeHandler}
              ></input>
            </div>

            <div className={classes.block}>
              <label>Subject</label>
              <input
                type="textarea"
                // onChange={usernameChangeHandler}
              ></input>
            </div>

            <div className={classes.block}>
              <label>Status</label>
              <textarea
                type="textarea"
                // onChange={usernameChangeHandler}
              ></textarea>
            </div>
            {/* <div className={classes.block}>
              <label>Date</label>
              <input
                type="date"
                // onChange={usernameChangeHandler}
              ></input>
            </div> */}
            <div className={classes.block}>
              <label>Priority</label>
              <input
                type="number"
                min="0"
                max="99"
                // onChange={usernameChangeHandler}
              ></input>
            </div>
            <Button type="submit" className={classes.button}>
              Create
            </Button>

            <Button
              type="button"
              className={classes.close}
              onClick={() => setAddTask(false)}
            >
              Cancel
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddTask;
