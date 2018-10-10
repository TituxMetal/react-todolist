import React from 'react'

import './Todo.css'

export default ({ todo }) => {
  const icon = todo.complete ?
    <i className='material-icons circle transparent green-text'>done</i> :
    <i className='material-icons circle transparent'>radio_button_unchecked</i>
  return (
    <li className='collection-item grey darken-3 avatar valign-wrapper complete' key={todo.id}>
      {icon}
      <p className={todo.complete ? 'completed' : ''}>{todo.text}</p>
    </li>
  )
}
