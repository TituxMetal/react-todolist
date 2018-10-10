import React from 'react'

import './TodoActions.css'

export default ({ todos }) => {
  const todosCount = todos.filter(todo => !todo.complete).length
  return (
    <li className="collection-item grey darken-3 valign-wrapper actions">
      <p className='count'>To do: {todosCount}</p>
    </li>
  )
}
