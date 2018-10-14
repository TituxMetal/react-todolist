import React from 'react'

import './Todo.css'

export default ({ todo, toggleComplete, onDelete }) => {
  const toggleDone = () => toggleComplete(todo.id)
  const icon = todo.complete ?
    <i onClick={toggleDone} className='material-icons circle transparent green-text'>done</i> :
    <i onClick={toggleDone} className='material-icons circle transparent'>radio_button_unchecked</i>
  return (
    <li className='collection-item grey darken-3 avatar valign-wrapper complete' key={todo.id}>
      {icon}
      <p className={todo.complete ? 'completed' : ''} onClick={toggleDone}>{todo.text}</p>
      <span className='secondary-content'>
        <button onClick={() => onDelete(todo.id)} className="btn-floating btn-small red tooltip" data-tooltip='Delete todo'>
          <i className='material-icons'>delete</i>
        </button>
      </span>
    </li>
  )
}
