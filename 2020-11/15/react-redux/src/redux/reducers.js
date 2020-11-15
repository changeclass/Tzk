// 包含N个reducer函数
// 根据老的strate和action返回一个新的state
import { ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS } from './action-type'

const initComments = [
  // { username: 'Tom', content: 'react挺好的' },
  // { username: 'Tom', content: 'react太难了' }
]
export function comments (state = initComments, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [action.data, ...state]
    case DELETE_COMMENT:
      return state.filter((comment, index) => action.data !== index)
    case RECEIVE_COMMENTS:
      return action.data
    default:
      return state
  }
}