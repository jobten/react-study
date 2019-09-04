import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        // 使用state属性维护状态，在构造函数中初始化状态
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        // 组件挂载时启动定时器每秒更新状态
        this.timerID = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
    componentWillUnmount() {
        // 组件卸载时停止定时器
        clearInterval(this.timerID)
    }
    render() {
        return(
            <div>
                { this.state.date.toLocaleTimeString() }
            </div>
        )
    }
}