import React from 'react'

import './TodoActions.css'

export default ({
  todos,
  filterTodos,
  toggleAllComplete,
  handleCompleteAllTodos,
  deleteAllCompleted
}) => {
  const todosCount = todos.filter(todo => !todo.complete).length
  const clearCompletedButton = todos.some(todo => todo.complete) ?
    <button onClick={deleteAllCompleted} className="btn-floating btn-small tooltip red darken-3" data-tooltip='Delete all completed todos'>
      <i className="material-icons">clear_all</i>
    </button> :
    null
  const completeAllTodosButton = todos.length > 0 ?
    <button onClick={handleCompleteAllTodos} className="btn-floating btn-small tooltip green" data-tooltip={toggleAllComplete ? 'Complete all todos' : 'Uncomplete all todos'}>
      <i className="material-icons">done_all</i>
    </button> :
    null
  return (
    <li className="collection-item grey darken-3 valign-wrapper actions">
      <p className='count'>To do: {todosCount}</p>
      <div className='secondary-content'>
        <button onClick={() => filterTodos('all')} className="btn-floating btn-small tooltip green darken-3" data-tooltip='Show all todos'>
          <i className="material-icons">list</i>
        </button>
        <button onClick={() => filterTodos('active')} className="btn-floating btn-small tooltip orange" data-tooltip='Show active todos'>
          <i className="material-icons">filter_none</i>
        </button>
        <button onClick={() => filterTodos('complete')} className="btn-floating btn-small tooltip green" data-tooltip='Show completed todos'>
          <i className="material-icons">check</i>
        </button>
        {completeAllTodosButton}
        {clearCompletedButton}
      </div>
    </li>
  )
}
