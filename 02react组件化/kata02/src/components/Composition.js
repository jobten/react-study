import React from 'react'

// Dialog组件负责展示，内容从外部传入

// Dialog定义组件外观和行为
// function Dialog(props) {
//     return <div sytle={{ border: "1px solid blue" }}>{ props.children }</div>
// }

// 获取相应部分的内容展示到指定位置
// function Dialog(props) {
//     return (<div sytle={{ border: "1px solid blue" }}>
//                 { props.children.default }
//                 <div>{ props.children.footer }</div>
//             </div>
//             )
// }

// 如果传入的是函数，还可以实现作用域插槽的功能
function Dialog(props) {
    // 备选消息
    const messages = {
        "foo": {title: 'foo', content: 'foo~'},
        "bar": {title: 'bar', content: 'bar~'},
    }
    // 执行函数获得要显示的内容
    const obj = props.children(messages[props.msg])
    const { body, footer } = obj
    return (<div sytle={{ border: "1px solid blue" }}>
                {/* 此处显示的内容是动态生成的 */}
                { body }
                <div>{ footer }</div>
            </div>
            )
}

export default function Compositions() {
    
    return (
        // 传入显示内容
        // <div>
        //     <Dialog>
        //         <h1>组件复合</h1>
        //         <p>复合组件给与你足够的敏捷去定义自定义组件的外观和行为</p>
        //     </Dialog>
        // </div>

        // 传入对象，key为具名插槽
        // <div>
        //     <Dialog>
        //         {{
        //             default: (
        //                 <div>
        //                     <h1>组件复合</h1>
        //                     <p>复合组件给与你足够的敏捷去定义自定义组件的外观和行为</p>
        //                 </div>
        //             ),
        //             footer: <button onClick={() => alert("react确实好")}>确定</button>
        //         }}
        //     </Dialog>
        // </div>
         // 修改为函数形式，根据传入值生成最终内容
         <div>
         <Dialog msg="foo">
             {({ title, content }) => ({             
                     body: (
                         <div>
                             <h1>{ title }</h1>
                             <p>{ content }</p>
                         </div>
                     ),
                     footer: <button onClick={() => alert("react确实好")}>确定</button>
                 })}
         </Dialog>
     </div>
    )
}