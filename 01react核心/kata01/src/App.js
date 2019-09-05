// 函数组件通常无状态，仅关注内容展示，返回渲染结果即可
import React from 'react'
// import JsxTest from "./components/JsxTest"
// import StateManager from './components/StateManager'
import EventHandle from "./components/EventHandle";

export default () => {
    
    return(
        <div>
            {/* <JsxTest /> */}
            {/* <StateManager /> */}
            { <EventHandle /> }
        </div>
    )
}