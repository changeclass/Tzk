import React, { Component } from 'react'
export default class App extends Component {
  state = {
    count: 0
  }
  increment = () => {
    // 1. 获取增加的值
    const number = this.select.value * 1
    // 2. 计算新的count
    const count = this.state.count + number
    // 3. 更新状态
    this.setState({ count })
  }
  decrement = () => {
    // 1. 获取增加的值
    const number = this.select.value * 1
    // 2. 计算新的count
    const count = this.state.count - number
    // 3. 更新状态
    this.setState({ count })
  }
  incrementIfOdd = () => {
    // 1. 获取增加的值
    const number = this.select.value * 1
    // 2. 计算新的count
    const count = this.state.count
    // 3. 判断是否满足条件
    if (count % 2 === 1) {
      // 3. 更新状态
      this.setState({ count: count + number })
    }
  }
  incrementAsync = () => {
    // 1. 获取增加的值
    const number = this.select.value * 1
    // 2. 计算新的count
    const count = this.state.count
    setTimeout(() => {
      // 3. 更新状态
      this.setState({ count: count + number })
    }, 1000)
  }
  render() {
    const { count } = this.state
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
