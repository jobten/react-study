import React, { Component } from 'react'
import { createStore } from "../store/redux"

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

const store = createStore(counterReducer)

export default class MyReduxTest extends Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }
    render() {
        return(
            <div>
                {store.getState()}
                <button onClick={() => store.dispatch({ type: "add" })}>+</button>
            </div>
        )
    }
}