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

  render() {
    return (
      <section className="container">
        <h1 className='center'>Todo's</h1>
        <Todos
          todos={this.state.todos}
          addTodo={this.addTodo}
        />
      </section>
    )
  }
}

export default App
