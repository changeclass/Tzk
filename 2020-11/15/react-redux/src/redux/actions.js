// 包含所有action creator(action的工厂函数)
import { ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS } from './action-type'
// 同步添加
export const addComent = (comment) => ({ type: ADD_COMMENT, data: comment })
// 同步删除
export const deleteComent = (index) => ({ type: DELETE_COMMENT, data: index })
// 同步接收comments
const receiveComments = (comments) => ({ type: RECEIVE_COMMENTS, data: comments })
// 异步获取
export const getComment = () => {
  return dispatch => {
    // 模拟异步请求
    setTimeout(() => {
      const comments = [
        { username: 'Tom', content: 'react挺好的' },
        { username: 'Tom', content: 'react太难了' }
      ]
      // 分发一个同步actions
      dispatch(receiveComments(comments))
    }, 1000);
  }
}