import React from 'react'

import classes from './Box.module.scss'
import moment from 'moment'

const Box = (props) => {
  return (
    <div className={classes.box}>
      <div className={classes.number}>{props.day.format('D')}</div>
      <div className={classes.task}>Task</div>
    </div>
  )
}

export default Box
