import React, { Component } from 'react';
import './App.css';

import Element from './components/Element/Element'

class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: [],
      inputValue: 'Hello world'
    }

    this.onChange = this.onChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
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

  removeTodo (index) {
    this.state.todos.splice(index, 1)
    this.setState({
      todos: this.state.todos
    })
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
              <Element
                key={index}
                index={index}
                element={todo}
                removeTodoCallback={this.removeTodo}
              />
            )
          })}
        </ul>
      </form>
    )
  }
}

export default App;
