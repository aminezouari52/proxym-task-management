import React, { useState } from 'react'

import Card from '../UI/Card'
import classes from './AddTask.module.scss'
import Button from '../UI/Button'

const AddTask = (props) => {
  const [addTask, setAddTask] = useState(false)

  const addTaskHandler = () => {
    setAddTask(true)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setAddTask(false)
  }

  return (
    <Card className={`${!addTask ? classes.add : classes.form}`}>
      {!addTask && <i onClick={addTaskHandler}>+</i>}

      {addTask && (
        <div>
          <h3>New Project</h3>
          <form onSubmit={onSubmitHandler}>
            <div className={classes.block}>
              <label>Name</label>
              <input
                type="textarea"
                // onChange={usernameChangeHandler}
              ></input>
            </div>

            <div className={classes.block}>
              <label>Project ID</label>
              <input
                type="textarea"
                // onChange={usernameChangeHandler}
              ></input>
            </div>

            <div className={classes.block}>
              <label>Description</label>
              <input
                type="textarea"
                // onChange={usernameChangeHandler}
              ></input>
            </div>
            <div className={classes.block}>
              <label>Date</label>
              <input
                type="date"
                // onChange={usernameChangeHandler}
              ></input>
            </div>
            <div className={classes.block}>
              <label>Hours</label>
              <input
                type="time"
                // onChange={usernameChangeHandler}
              ></input>
            </div>
            <Button type="submit" className={classes.button}>
              Create
            </Button>
          </form>
        </div>
      )}
    </Card>
  )
}

export default AddTask
