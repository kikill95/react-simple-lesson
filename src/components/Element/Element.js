import React, { Component } from 'react';
import './index.css';

export default class Element extends Component {
  constructor (props) {
    super(props)

    this.removing = this.removing.bind(this)
  }

  removing () {
    this.props.removeTodoCallback(this.props.index)
  }

  render () {
    return (
      <li>
        <p>{this.props.element.title}</p>
        <button
          type="button"
          onClick={this.removing}
        >Remove</button>
      </li>
    )
  }
}
