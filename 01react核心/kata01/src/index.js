// React负责逻辑控制，数据 -> VDOM
// ReactDom渲染实际DOM，VDOM -> DOM，如果换到移动端，就用别的库来渲染 React使用JSX来描述UI
import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import StateManager from './components/StateManager'

ReactDOM.render(<StateManager />, document.querySelector('#root'))