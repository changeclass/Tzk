import React, { Component } from 'react'
import { Button, Toast } from 'antd-mobile'
export default class App extends Component {
  handClick() {
    Toast.info('666')
  }
  render() {
    return (
      <Button type='primary' onClick={this.handClick}>
        按钮
      </Button>
    )
  }
}
