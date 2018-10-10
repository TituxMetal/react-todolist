import React, { Component } from 'react'
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: []
  }

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }))
  }

  toggleComplete = todoId => {
    this.setState(state => ({
      todos: state.todos.map(todo => todo.id === todoId ? { ...todo, complete: !todo.complete } : todo)
    }))
  }

  render() {
    return (
      <section className="container">
        <h1 className='center'>Todo's</h1>
        <Todos
          todos={this.state.todos}
          addTodo={this.addTodo}
          toggleComplete={this.toggleComplete}
        />
      </section>
    )
  }
}

export default App
