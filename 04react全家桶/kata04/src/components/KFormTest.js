import React, { Component } from 'react'
import { Input, Button } from "antd";

function kFormCreate(Comp) {

    return class extends Component {
        constructor(props) {
            super(props)
            this.options = {}
            this.state={}
        }

        handleChange = e => {
            const { name, value } = e.target
            this.setState({ [name]: value }, () => {
                // 校验： 注意要在回调中调用
                this.validateField(name)
            })
        }

        validateField = field => {
            const { rules } = this.options[field]
            const ret = rules.some(rule => {
                if (rule.required) {
                    if (!this.state[field]) {// 校验失败
                        this.setState({
                            [field + 'Message']: rule.message
                        })
                        return false
                    }
                }
                return true
            })
            // 若校验成功，清除错误信息
            if (ret) {
                this.setState({ [field + 'Message']: '' })
                console.log(this.state[field + 'Message']   )
            }
            return ret
        }

        validateFields = cb => {
            const rets = Object.keys(this.options).map(field => {
                return this.validateField(field);
              });
              const ret = rets.every(v => v);
              // 将校验结果传出去，并传递数据
              cb(ret, this.state);
        }

        getFieldDec = (field, option) => {
            this.options[field] = option
            return InputComp => (
                <div>
                    {React.cloneElement(InputComp, {
                        name: field,
                        value: this.state[field] || '',
                        onChange: this.handleChange
                    })}
                    {this.state[field + 'Message'] && (
                        <p style= {{ color: 'red' }}>{this.state[field + 'Message']}</p>)}
                </div>
            )
        }
        
        render() {
            return(
                <Comp
                    {...this.props}
                    getFieldDec={ this.getFieldDec }
                    validateFields = { this.validateFields } />
            )
        }
    }
}

@kFormCreate
class KFormTest extends Component {
    onLogin = () => {
        // 校验
        this.props.validateFields((isValid, data) => {
          if (isValid) {
            console.log("登录！！！！")
          } else {
            alert("校验失败")
          }
        })
    }

    render() {
        const { getFieldDec } = this.props;
        return (
            <div>
                { getFieldDec('username', {
                    rules: [{ required: true, message: 'please input username'}]
                })(<Input type='text' />) }

                { getFieldDec('password', {
                    rules: [{ required: true, message: 'please input password'}]
                })(<Input type='password' />) }
                <Button onClick={this.onLogin}>登录</Button>
            </div>
        )
    }
}

export default KFormTest