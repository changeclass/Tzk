// 包含所有actions creator
// 同步action返回对象，异步返回函数
import { DECREMENT, INCREMENT } from "./actions-types";

// 增加
export const increment = (number) => ({ type: INCREMENT, data: number })
// 减少
export const decrement = (number) => ({ type: DECREMENT, data: number })
// 异步action
export const incrementAsync = (number) => {
  return dispatch => {
    setTimeout(() => {
      // 1s之后才会去执行action
      dispatch(increment(number))
    }, 1000);
  }
}