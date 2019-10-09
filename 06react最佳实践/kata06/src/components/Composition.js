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
    // props.children代表标签内部内容
    // 执行函数获得要显示的内容
    const { body, footer } = props.children(messages[props.msg])

    return (<div sytle={{ border: "1px solid blue" }}>
                {/* 此处显示的内容是动态生成的 */}
                { body }
                <div>{ footer }</div>
            </div>
            )
}

function Radio({ children, ...abc }) {
    return (
        <label>
            <input type="radio" { ...abc }/>
            { children }
        </label>
    )
}

function RadioGroup(props) {
    return (
        <div>
            { React.Children.map(props.children, radio => {
                // 要修改虚拟dom 只能克隆它
                // 参数1是克隆对象
                // 参数2是设置的属性
                return React.cloneElement(radio, { name: props.name })
            })}
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

         <RadioGroup name="mvvm">
            <Radio value="vue">vue</Radio>
            <Radio value="react">react</Radio>
            <Radio value="ng">angular</Radio>
        </RadioGroup>
     </div>
    )
}