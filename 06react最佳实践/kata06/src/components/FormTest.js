import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'

class NormalLoginForm extends Component {
    
    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((error, values) => {
            console.log('....', error)
            if (!error) {
                console.log('received values of form ', values)
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        return(
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }]
                        })(
                        <Input
                            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                            placeholder="Username"
                          />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                            rules: [{ len: 6, message: 'the length is error'}]
                    })(<Input
                        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }}></Icon>}
                        placeholder="Password"
                        type="password">
                    </Input>)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login'})(
    NormalLoginForm
)

export default WrappedNormalLoginForm