import { createStore, applyMiddleware } from 'redux'
import { counter } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
// 生成一个store对象
const store = createStore(counter, composeWithDevTools(applyMiddleware(thunk))) // 内部第一次调用初始实例
export default store