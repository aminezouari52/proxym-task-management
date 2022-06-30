import React from 'react'

import classes from './Dev.module.scss'
import Card from '../UI/Card'
import Task from './Task'
import AddTask from './AddTask'
import Calender from './Calender/Calender'

const Dev = (props) => {
  const tasks = [
    'Monitoring systems performance.',
    'Maintain or exceed compliance with industry standards.',
    'Developing and executing project plans.',
  ]

  return (
    <>
      <AddTask />
      <Calender />
      <Card>
        <div className={classes.dev}>
          <h5>Tasks assigned to me</h5>

          {tasks.map((task) => (
            <Task key={Math.random().toString()} tasks={tasks} task={task} />
          ))}
        </div>
      </Card>
    </>
  )
}

export default Dev
