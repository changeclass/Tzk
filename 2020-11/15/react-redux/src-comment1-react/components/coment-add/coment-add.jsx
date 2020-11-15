import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class ComentAdd extends Component {
  state = {
    username: '',
    content: ''
  }
  propsType = {
    setState: PropTypes.func.isRequired
  }
  handleNameChange = (e) => {
    const username = e.target.value
    this.setState({ username })
  }
  handleContentSubmit = (e) => {
    const content = e.target.value
    this.setState({ content })
  }
  handleSubmit = () => {
    const comment = this.state
    this.props.addComent(comment)
  }
  render() {
    const { username, content } = this.state
    return (
      <div>
        <div className='col-md-4'>
          <form className='form-horizontal'>
            <div className='form-group'>
              <label>用户名</label>
              <input
                type='text'
                className='form-control'
                placeholder='用户名'
                value={username}
                onChange={this.handleNameChange}
              />
            </div>
            <div className='form-group'>
              <label>评论内容</label>
              <textarea
                className='form-control'
                rows='6'
                placeholder='评论内容'
                value={content}
                onChange={this.handleContentSubmit}
              ></textarea>
            </div>
            <div className='form-group'>
              <div className='col-sm-offset-2 col-sm-10'>
                <button
                  type='button'
                  className='btn btn-default pull-right'
                  onClick={this.handleSubmit}
                >
                  提交
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
