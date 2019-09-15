import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add, minus, asyncAdd } from "../store/counter";

// 参数1：mapStateToProps = (state) => {return {num: state}}
// 参数2：mapDispatchToProps = dispatch => {return {add:()=>dispatch({type:'add'})}}
// connect两个任务：
// 1.自动渲染
// 2.映射到组件属性
@connect(
    state => ({ num: state.couter }), //状态映射
    {
        add,
        minus,
        asyncAdd
    }
)
class ReduxTest extends Component {
    render() {
        return(
            <div>
                {/* <p>{store.getState()}</p>
                <div>
                    <button onClick={() => store.dispatch({type: 'add'})}>+</button>
                    <button onClick={() => store.dispatch({type: 'minus'})}>-</button>
                </div> */}
                <p>{this.props.num}</p>
                <div>
                    <button onClick={() => this.props.add(3)}>+</button>
                    <button onClick={() => this.props.minus(2)}>-</button>
                    <button onClick={this.props.asyncAdd}>+</button>
                </div>
            </div>
        )
    }
}

export default ReduxTest