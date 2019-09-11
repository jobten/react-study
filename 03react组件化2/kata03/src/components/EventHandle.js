import React, { Component } from 'react'

export default class EventHandle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    // 使用箭头函数明确this指向
    handleChange = e => {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return <div>
            <input type="text" value={ this.state.name } onChange={ this.handleChange }></input>
            <p>{ this.state.name }</p>
            </div>
    }
}