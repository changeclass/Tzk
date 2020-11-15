import React, { Component } from 'react'
const allMessages = [
  { id: 1, title: 'message001', content: '我爱你，中国' },
  { id: 2, title: 'message002', content: '我爱你，老婆' },
  { id: 3, title: 'message003', content: '我爱你，孩子' },
  { id: 4, title: 'message004', content: '我爱你，父母' }
]
export default class MessageDetail extends Component {
  render() {
    const { id } = this.props.match.params
    const message = allMessages.find((m) => m.id === Number(id))
    return (
      <ul>
        <li>ID:{message.id}</li>
        <li>TITLE:{message.title}</li>
        <li>CONTENT:{message.content}</li>
      </ul>
    )
  }
}
