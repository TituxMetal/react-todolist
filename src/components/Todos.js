import React, { Fragment } from 'react'

import Todo from './Todo'
import TodoForm from './TodoForm'

export default ({ todos, addTodo, toggleComplete }) => {
  const todoList = todos.length > 0 ?
    todos.map(todo =>
      <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />
    ) :
    <li className="collection-item grey darken-3 valign-wrapper">
      <p className='col s8 offset-s2 l6 offset-l3'>No todo!</p>
    </li>
  return (
    <Fragment>
      <div className="row">
        <ul className="collection with-header col s12 l8 offset-l2">
          <li className="collection-header grey darken-3">
            <TodoForm onSubmit={addTodo} />
          </li>
          {todoList}
        </ul>
      </div>
    </Fragment>
  )
}
