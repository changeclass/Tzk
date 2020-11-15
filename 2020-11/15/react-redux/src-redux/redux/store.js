import { createStore } from 'redux'
import { counter } from './reducers'
// 生成一个store对象
const store = createStore(counter) // 内部第一次调用初始实例
export default store