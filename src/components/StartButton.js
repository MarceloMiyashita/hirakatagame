import React, { Component } from 'react'
import Button from './Button'

export default class StartButton extends Component {
  render() {
    return (
      <Button
        onClick={() => this.props.handler()}
        style={{
          display: 'block',
          margin: 'auto'
        }}
      >
        Iniciar
      </Button>
    )
  }

  start() {
    return () => alert('test')
  }
}
