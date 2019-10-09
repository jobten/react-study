import React, { Component } from 'react'
import { createStore, applyMiddleware } from "../store/redux"

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "add":
            return state + 1;
        case "minus":
            return state - 1;
        default:
            return state;
  } 
}

// const store = createStore(counterReducer)

// 自定义中间件
function logger() {
    // 返回真正中间件任务执行函数
    return dispatch => action => {
      // 执行中间件任务
      console.log(action.type + "执行了！！！");
  
      // 执行下一个中间件
      return dispatch(action);
    }
}

// thunk实现
const thunk = ({getState}) => dispatch => action => {
    // thunk逻辑：处理函数action
	if (typeof action == 'function') {
		return action(dispatch, getState)
    }
    // 不是函数直接跳过
	return dispatch(action)
}

const store = createStore(counterReducer, applyMiddleware(logger, thunk));

export default class MyReduxTest extends Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }
    render() {
        return(
            <div>
                {store.getState()}
                <button onClick={() => store.dispatch({ type: "add" })}>+</button>
                <button onClick={() => store.dispatch(function(){
                    setTimeout(() => {
                        store.dispatch({ type: "add" })
                    }, 1000);
                })}>+</button>
            </div>
        )
    }
}