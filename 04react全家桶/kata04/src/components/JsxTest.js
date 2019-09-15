// class组件通常拥有状态和生命周期，继承于Component，实现render方法
import React, { Component } from 'react'
import logo from '../logo.svg'
// css模块化，加module，如index.module.css
import style from '../index.module.css'

export default class JsxTest extends Component {
    render(){
    // 表达式{}的使用
    const name = 'react study'
    const jsx1 = <h1>{ name }</h1>
    
    // 函数也是合法表达式
    const user = {
        firstName: 'Weicai',
        lastName: 'Huang'
    }
    const formatName = (user) => {
        return user.firstName + ' ' + user.lastName
    }
    const jsx2 = <h2>{ formatName(user) }</h2>
    
    // 支持条件语法
    const isShow = true
    const name1 = 'Tom'
    const title = isShow ? <h3>{ name1 }</h3> : ''
    
    // 数组会被作为一组子元素，数组中存放一组jsx可以用于显示列表数据
    const array = [1, 2, 3].map(num => <li key={ num }>{ num }</li>)
    const jsx3 = <ul>{ array }</ul>
    
    // 属性的使用
    // 静态值用双括号，动态值用单括号，class要单独处理
    const jsx4 = <img src={logo} style={{ width: 100 }} className={ style.img } alt=""/>
        return(
            <div>
                { jsx1 }{ jsx2 }{ title }{ jsx3 }{ jsx4 }
            </div>
        )
    }
}