import React from 'react'

import classes from './Button.module.scss'

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`${classes.button} ${props.className}`}
    >
      {props.children}
    </button>
  )
}

export default Button
