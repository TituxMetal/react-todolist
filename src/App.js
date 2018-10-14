import React, { Component } from 'react'
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [],
    todosToShow: 'all'
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

  updateTodoToShow = string => {
    this.setState({
      todosToShow: string
    })
  }

  render() {
    let todos = []
    switch (this.state.todosToShow) {
      case 'active':
        todos = this.state.todos.filter(todo => !todo.complete)
        break
      case 'complete':
        todos = this.state.todos.filter(todo => todo.complete)
        break
      default:
        todos = this.state.todos
    }
    return (
      <section className="container">
        <h1 className='center'>Todo's</h1>
        <Todos
          todos={todos}
          addTodo={this.addTodo}
          toggleComplete={this.toggleComplete}
          filterTodos={this.updateTodoToShow}
        />
      </section>
    )
  }
}

export default App
