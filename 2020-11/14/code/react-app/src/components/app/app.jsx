import React, { Component } from 'react'
import ComentAdd from '../coment-add/coment-add'
import ComentList from '../coment-list/coment-list'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [
        { username: 'Tom', content: 'react挺好的' },
        { username: 'Tom', content: 'react太难了' }
      ]
    }
  }
  // 添加分类
  addComent = (comment) => {
    const { comments } = this.state
    comments.unshift(comment)
    this.setState(comments)
  }
  // 删除分类
  deleteComent = (index) => {
    const { comments } = this.state
    comments.splice(index, 1)
    this.setState(comments)
  }
  render() {
    const { comments } = this.state
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
          <ComentAdd addComent={this.addComent} />
          <ComentList comments={comments} deleteComent={this.deleteComent} />
        </div>
      </div>
    )
  }
}
