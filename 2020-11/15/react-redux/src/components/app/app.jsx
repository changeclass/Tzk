import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import ComentAdd from '../coment-add/coment-add'
import ComentList from '../coment-list/coment-list'

import { addComent, deleteComent, getComment } from '../../redux/actions'
class App extends Component {
  componentDidMount() {
    // 异步获取评论数组
    this.props.getComment()
  }
  static propTypes = {
    comments: propTypes.array.isRequired,
    addComent: propTypes.func.isRequired,
    deleteComent: propTypes.func.isRequired,
    getComment: propTypes.func.isRequired
  }

  render() {
    const { comments, addComent, deleteComent } = this.props
    return (
      <div>
        <header className='site-header jumbotron'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className='container'>
          <ComentAdd addComent={addComent} />
          <ComentList comments={comments} deleteComent={deleteComent} />
        </div>
      </div>
    )
  }
}
// 第一个参数取决于数据定义格式
export default connect((state) => ({ comments: state }), {
  // 以下来源于action
  addComent,
  deleteComent,
  getComment
})(App)
