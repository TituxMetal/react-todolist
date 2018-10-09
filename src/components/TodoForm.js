import React, { Component } from 'react'
import shortid from 'shortid'

import './TodoForm.css'

export default class TodoForm extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = event => {
    event.preventDefault()
    if (this.isValid()) {
      this.props.onSubmit({
        id: shortid.generate(),
        text: this.state.text,
        complete: false
      })
      this.setState({
        text: ""
      })
    }
  }

  isValid = () => {
    return this.state.text.length > 3
  }

  render() {
    const button = this.isValid() ?
      <i onClick={this.handleSubmit} className='material-icons prefix green-text active'>add</i> :
      <i className='material-icons prefix red-text active'>block</i>

    return (
      <form className="row" onSubmit={this.handleSubmit}>
        <div className="input-field col s12">
          {button}
          <input
            className='grey-text'
            type='text'
            id='todo'
            name='text'
            value={this.state.text}
            onChange={this.handleChange}
            placeholder='Add a todo'
            autoFocus
          />
        </div>
      </form>
    )
  }
}
