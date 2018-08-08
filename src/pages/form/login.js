import React from 'react'
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd'

const FormItem = Form.Item;
class FormLogin extends React.Component {
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, value)=>{
            if(!err) {
                message.success(`${userInfo.userName}，恭喜你注册成功。`);
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="登录表单">
                    <Form style={{ width: '300px' }}>
                        <FormItem>
                            {
                                getFieldDecorator('userName',{
                                    initialValue: '',
                                    rules: [{
                                        required: true,
                                        message: '用户名不能为空'
                                    },{
                                        pattern: /^[a-zA-Z0-9_-]{4,16}$/,
                                        message: '只能输入4-16位数字、字母、下划线、减号'
                                    }]
                                })(<Input prefix={<Icon type="user"></Icon>} placeholder="请输入用户名" />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password',{
                                    initialValue: '',
                                    rules: [{
                                        required: true,
                                        message: '密码不能为空'
                                    },{
                                        pattern: /^(\w){6,16}$/,
                                            message: '只能输入6-16位由字母、数字、下划线组成的密码'
                                    }]
                                })(<Input prefix={<Icon type="lock"></Icon>} type="password" placeholder="请输入密码" />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember',{
                                    // Checkbox 组件设置默认选中时需要 valuePropName 和 initialValue 一起使用
                                    valuePropName: 'checked',
                                    initialValue: false
                                })(<Checkbox>记住密码</Checkbox>)
                            }
                            <a href="#" style={{float: 'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button style={{width: '300px'}} type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(FormLogin);