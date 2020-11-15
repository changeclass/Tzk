import React, { Component } from 'react'

import { increment, decrement } from '../redux/actions'

export default class App extends Component {
  state = {
    count: 0
  }
  increment = () => {
    // 1. 获取增加的值
    const number = this.select.value * 1
    // 2. 计算新的count并更新
    this.props.store.dispatch(increment(number))
  }
  decrement = () => {
    // 1. 获取增加的值
    const number = this.select.value * 1
    // 2. 计算新的count并更新
    this.props.store.dispatch(decrement(number))
  }
  incrementIfOdd = () => {
    // 1. 获取增加的值
    const number = this.select.value * 1
    // 2. 计算新的count
    const count = this.props.store.getState()
    // 3. 判断是否满足条件
    if (count % 2 === 1) {
      this.props.store.dispatch(increment(number))
    }
  }
  incrementAsync = () => {
    // 1. 获取增加的值
    const number = this.select.value * 1
    setTimeout(() => {
      // 3. 更新状态
      this.props.store.dispatch(increment(number))
    }, 1000)
  }
  render() {
    const count = this.props.store.getState()
    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select ref={(select) => (this.select = select)}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.incrementIfOdd}>increment if odd</button>
          <button onClick={this.incrementAsync}>increment async</button>
        </div>
      </div>
    )
  }
}
