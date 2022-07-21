import React from 'react';

import classes from './Button.module.scss';

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${classes.button} ${props.className}`}
    >
      <strong>{props.children}</strong>
    </button>
  );
};

export default Button;
