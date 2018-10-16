import React, { Component } from 'react'
import Todos from './components/Todos'
import { Tooltip } from 'materialize-css/dist/js/materialize.min.js'

class App extends Component {
  state = {
    todos: [],
    todosToShow: 'all'
  }

  componentDidMount() {
    Tooltip.init(document.querySelectorAll('.tooltip'))
  }

  componentDidUpdate() {
    Tooltip.init(document.querySelectorAll('.tooltip'))
  }

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }))
  }

  deleteAllCompletedTodos = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.complete)
    }))
  }

  handleDelete = todoId => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== todoId)
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
          handleDelete={this.handleDelete}
          handleDeleteAllCompleted={this.deleteAllCompletedTodos}
          toggleComplete={this.toggleComplete}
          filterTodos={this.updateTodoToShow}
        />
      </section>
    )
  }
}

export default App
