import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: [],
      inputValue: 'Hello world'
    }

    this.onChange = this.onChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  onChange (event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  addTodo (event) {
    event.preventDefault()
    if (this.state.inputValue) {
      this.setState({
        todos: this.state.todos.concat([{
          title: this.state.inputValue
        }]),
        inputValue: ''
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <h1>
          {this.state.inputValue}
        </h1>
        <input type="text" onChange={this.onChange} value={this.state.inputValue}/>
        <button type="submit">Add todo</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={index}>
                {todo.title}
              </li>
            )
          })}
        </ul>
      </form>
    )
  }
}

export default App;
