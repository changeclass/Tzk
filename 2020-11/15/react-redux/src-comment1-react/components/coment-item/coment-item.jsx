import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './comentItem.css'
export default class ComentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComent: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }
  handleClick = () => {
    const { comment, deleteComent, index } = this.props
    // 提示
    if (window.confirm(`确定删除${comment.username}么？`)) {
      deleteComent(index)
    }
  }
  render() {
    const { comment } = this.props
    return (
      <li className='list-group-item'>
        <div className='handle'>
          <a href='#!' onClick={this.handleClick}>
            删除
          </a>
        </div>
        <p className='user'>
          <span>{comment.username}</span>
          <span>说:</span>
        </p>
        <p className='centence'>{comment.content}</p>
      </li>
    )
  }
}
