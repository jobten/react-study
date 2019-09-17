import React, { Component } from 'react'
import { createPortal, unmountComponentAtNode, unstable_renderSubtreeIntoContainer } from 'react-dom'

export default class Dialog extends Component {
    constructor(props){
        super(props)

        this.node = document.createElement('div')
        document.body.appendChild(this.node)
    }
    render() {
        return createPortal(
            <div className="dialog">
                { this.props.children }
            </div>,
            this.node
        )
    }

    componentWillUnmount() {
        document.body.removeChild(this.node)
    }
}

export class Dialog2 extends Component {
    render() {
        return null
    }

    componentDidMount() {
        this.node = document.createElement('div')
        document.body.appendChild(this.node)

        this.createPortal(this.props);
    }

    componentWillUnmount() {
        // 清理节点
        unmountComponentAtNode(this.node);
        //   清理宿主div
        window.document.body.removeChild(this.node);
    }

    componentWillUpdate() {
        this.createPortal(this.props);
    }

    createPortal(props) {
        unstable_renderSubtreeIntoContainer(
            this, //当前组件
            <div className="dialog">{props.children}</div>, // 塞进传送门的JSX
            this.node // 传送门另一端的DOM node
        )
    }
}