// 函数组件通常无状态，仅关注内容展示，返回渲染结果即可
import React from 'react'
// import JsxTest from "./components/JsxTest"
// import StateManager from './components/StateManager'
// import EventHandle from "./components/EventHandle"
// import ContextTest from "./components/ContextTest"
// import HocTest from "./components/Hoc"
// import Composition from "./components/Composition"
// import HooksTest from "./components/HooksTest"
// import WrappedNormalLoginForm from "./components/FormTest"
// import KFormTest from "./components/KFormTest"
// import Dialog, { Dialog2 } from "./components/Dialog"
// import Tree from "./components/Tree"
// import CommentList from "./components/CommentList"
// import ReduxTest from "./components/ReduxTest"
// import MyReduxTest from "./components/MyReduxTest"
// import RouterTest from "./components/RouterTest"
import MyRouterTest from "./components/MyRouterTest"

// import Button from 'antd/lib/button'
// import "antd/dist/antd.css"

// class App extends React.Component {
//     render() {
//       return (
//         <div className="App">
//           <Button type="primary">Button</Button>
//         </div>
//   ) }
// }

export default () => {
    
    return(
        <div>
            {/* <JsxTest /> */}
            {/* <StateManager /> */}
            {/* { <EventHandle /> }, */}
            {/* { <ContextTest />} */}
            {/* {<HocTest />} */}
            {/* {<Composition />} */}
            {/* {<HooksTest />} */}
            {/* {<App />} */}
            {/* {<WrappedNormalLoginForm />} */}
            {/* {<KFormTest />} */}
            {/* { <Dialog><h1>Dialog</h1></Dialog>}
            { <Dialog2><h1>Dialog2</h1></Dialog2>} */}
            {/* { <Tree></Tree>} */}
            {/* { <CommentList></CommentList>} */}
            {/* { <ReduxTest></ReduxTest>} */}
            {/* { <MyReduxTest></MyReduxTest>} */}
            {/* { <RouterTest></RouterTest>} */}
            { <MyRouterTest></MyRouterTest>}
        </div>
    )
}