import React, { useState, useReducer, useEffect, useContext } from 'react'

function FruitList({fruits, onSetFruit}) {
    return (
        <ul>
            {fruits.map(fruit => (
                <li key={ fruit } onClick={ () => onSetFruit(fruit) }>
                    { fruit }
                </li>
            ))}
        </ul>
    )
}

function FruitAdd(props) {
    // 使用useContext获取上下文
    const { dispatch } = useContext(Context);

    // 输入内容状态及设置内容状态的方法
    const [pname, setPname] = useState('')

    const onAddFruit = e => {
        if (e.key === 'Enter') {
            // props.onAddFruit(pname)
            dispatch({ type: "add", payload: pname })
            setPname('')
        }
    }

    return (
        <div>
            <input type="text" value={pname} onChange={ e => setPname(e.target.value)} onKeyDown = {onAddFruit} >
            </input>
        </div>
    )
}

// useReducer是useState的可选项，常用于组件有复杂状态逻辑时，类似于redux中reducer概念
function fruitsReducer(state, action) {
    switch(action.type) {
        case 'init':
            return action.payload
        case 'add':
            return [...state, action.payload]
        default:
            return state
    }
}
// 创建上下文
const Context = React.createContext()
const Provider = Context.Provider

export default function HooksTest() {
    const [fruit, setFruit] = useState('')
    // const [fruits, setFruits] = useState([])
    // 参数1是reducer
    // 参数2是初始值
    const [fruits, dispatch] = useReducer(fruitsReducer, [])

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'init', payload: ['香蕉','西瓜'] })
        }, 1000)
    }, [])

    useEffect(() => {
        document.title = fruit;
        // ajax
      }, [fruit]);

    // return (
    //     <div>
    //         {/* <FruitAdd onAddFruit={pname => setFruits([...fruits, pname])} /> */}
    //         <FruitAdd onAddFruit={pname => dispatch({ type: 'add', payload: pname })} />
    //         <p>{fruit === '' ? '请选择你喜欢的水果': `你选择的水果是：${fruit}`}</p>
    //         <FruitList fruits={fruits} onSetFruit={setFruit} />
    //     </div>
    // )
    return (
        // 提供上下文的值
        <Provider value={{ fruit, dispatch }}>
            <div>
                {/* 这里不再需要给FruitAdd传递状态mutation函数，实现了解耦 */}
                <FruitAdd />
                <p>{fruit === '' ? '请选择你喜欢的水果': `你选择的水果是：${fruit}`}</p>
                <FruitList fruits={fruits} onSetFruit={setFruit} />
            </div>
        </Provider>
    )
}