import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentItem from '../coment-item/coment-item'
import './comentList.css'
export default class ComentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComent: PropTypes.func.isRequired
  }

  render() {
    const { comments, deleteComent } = this.props
    const display = comments.length === 0 ? 'block' : 'none'
    console.log(display)
    return (
      <div>
        <div className='col-md-8'>
          <h3 className='reply'>评论回复：</h3>
          <h2 style={{ display }}>暂无评论，点击左侧添加评论！！！</h2>
          <ul className='list-group'>
            {comments.map((item, index) => (
              <CommentItem
                comment={item}
                key={index}
                deleteComent={deleteComent}
                index={index}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

// ComentList.propTypes = {
//   comments: PropTypes.array.isRequired
// }
