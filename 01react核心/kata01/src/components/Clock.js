import React, { Component, useState, useEffect } from 'react'

// 函数组件状态管理：useState, useEffect
export function ClockFunc() {
    // 创建状态, useState返回状态和修改状态的函数所组成的数组
    const [date, setDate] = useState(new Date())

    // 定时器是副作用, 需要用到useEffect
    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timerID)
    }, []) // 参数2指的是依赖状态，没有依赖且仅执行一次，返空数组

    return <div>{ date.toLocaleTimeString() }</div>
}

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