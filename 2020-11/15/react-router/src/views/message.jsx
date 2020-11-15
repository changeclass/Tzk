import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyNavLink from '../components/myNavLink'
import messageDetail from './message-detail'
export default class Message extends Component {
  state = {
    messages: []
  }
  showDetail(id) {
    this.props.history.push(`/home/message/messagedetail/${id}`)
  }
  showDetail2(id) {
    this.props.history.replace(`/home/message/messagedetail/${id}`)
  }
  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }
  componentDidMount() {
    // 模拟发送Ajax请求异步获取数据
    setTimeout(() => {
      const messages = [
        { id: 1, title: 'message001' },
        { id: 2, title: 'message002' },
        { id: 3, title: 'message003' },
        { id: 4, title: 'message004' }
      ]
      this.setState({ messages })
    }, 1000)
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.messages.map((m, index) => (
            <li key={index}>
              <MyNavLink to={'/home/message/messagedetail/' + m.id}>
                {m.title}
              </MyNavLink>
              &nbsp;&nbsp;
              <button onClick={() => this.showDetail(m.id)}>push()查看</button>
              <button onClick={() => this.showDetail2(m.id)}>
                replace()查看
              </button>
            </li>
          ))}
        </ul>
        <p>
          <button onClick={this.back}>前进</button>
          <button onClick={this.forward}>回退</button>
        </p>
        <Route
          path='/home/message/messagedetail/:id'
          component={messageDetail}
        />
      </div>
    )
  }
}
