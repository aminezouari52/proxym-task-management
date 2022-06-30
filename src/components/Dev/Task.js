import React from 'react'

const Task = (props) => {
  return (
    <div>
      <h5>
        {props.task}
        <span> / Date: 25/6</span>
      </h5>
    </div>
  )
}
export default Task
