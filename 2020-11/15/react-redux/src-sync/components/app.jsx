import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../redux/actions'
class App extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired
  }
  increment = () => {
    // 1. 获取增加的值
    const number = this.select.value * 1
    // 2. 计算新的count并更新
    this.props.increment(number)
  }
  decrement = () => {
    // 1. 获取增加的值
    const number = this.select.value * 1
    // 2. 计算新的count并更新
    this.props.decrement(number)
  }
  incrementIfOdd = () => {
    // 1. 获取增加的值
    const number = this.select.value * 1
    // 2. 计算新的count
    const count = this.props.count
    // 3. 判断是否满足条件
    if (count % 2 === 1) {
      this.props.increment(number)
    }
  }
  incrementAsync = () => {
    // 1. 获取增加的值
    const number = this.select.value * 1
    this.props.incrementAsync(number)
  }
  render() {
    const { count } = this.props
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
export default connect((state) => ({ count: state }), {
  increment,
  decrement,
  incrementAsync
})(App)
