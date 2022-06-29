import React from 'react'

import Header from '../Header/Header'
import Card from '../Card/Card'

const Dev = (props) => {
  return (
    <div>
      <Header />
      <button onClick={props.onClick}>DEV PAGE GO BACK</button>
    </div>
  )
}

export default Dev
