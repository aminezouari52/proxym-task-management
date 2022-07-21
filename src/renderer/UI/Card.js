import React from 'react'

import classes from './Card.module.scss'

const Card = (props) => {
  return (
    <div className={`${classes.container} ${props.className} ${props.style}`}>
      {props.children}
    </div>
  )
}

export default Card
