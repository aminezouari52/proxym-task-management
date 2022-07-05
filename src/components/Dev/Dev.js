import React from 'react'

import classes from './Dev.module.scss'
import AddTask from './AddTask'
import Calender from './Calender/Calender'
import Tasks from './Tasks'

const Dev = () => {
  const tasks = [
    'Monitoring systems performance.',
    'Maintain or exceed compliance with industry standards.',
    'Developing and executing project plans.',
  ]

  return (
    <>
      <AddTask />
      <Calender />
      <Tasks tasks={tasks} />
    </>
  )
}

export default Dev
