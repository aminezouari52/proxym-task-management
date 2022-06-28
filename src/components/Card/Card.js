import React from 'react'

import classes from './Card.module.css'

const Card = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Card
