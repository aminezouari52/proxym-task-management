import React from 'react'

import Card from '../UI/Card'
import classes from './Tasks.module.scss'

const Task = (props) => {
  return (
    <div>
      <Card className={classes.tasks}>
        <h5>Tasks assigned to me</h5>
        {props.tasks.map((task) => (
          <div key={Math.random().toString()} className={classes.task}>
            {task}
          </div>
        ))}
      </Card>
    </div>
  )
}
export default Task
