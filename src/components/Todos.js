import React, { Fragment } from 'react'

import TodoForm from './TodoForm'

export default ({ addTodo }) => {
  return (
    <Fragment>
      <div className="row">
        <ul className="collection with-header col s12 l8 offset-l2">
          <li className="collection-header grey darken-3">
            <TodoForm onSubmit={addTodo} />
          </li>
        </ul>
      </div>
    </Fragment>
  )
}
