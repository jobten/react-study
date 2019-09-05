import React, { Component, useState, useEffect } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        // 使用state属性维护状态，在构造函数中初始化状态
        this.state = {
            date: new Date(),
            counter: 0
        }
    }
    componentDidMount() {
        // 组件挂载时启动定时器每秒更新状态
        this.timerID = setInterval(() => {
            this.setState({
                date: new Date()
            }, () => {
                // 每次状态更新就通知父组件
                this.props.change(this.state.date)
            })
        }, 1000)
        // this.setState({counter: this.state.counter + 1}, () => {
        //     console.log('this.state.counter1 - ', this.state.counter)
        // });

        this.setState(
            nextState => {
              console.log('counter1 - ', nextState.counter);
              return { counter: nextState.counter + 1 };
            },
            () => {
            //   console.log('counter11 - ', this.state.counter);
            }
          );

          this.setState(
            nextState => {
              console.log('counter2 - ', nextState.counter);
              return { counter: nextState.counter + 1 };
            },
            () => {
            //   console.log('counter22 - ', this.state.counter);
            }
          );
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