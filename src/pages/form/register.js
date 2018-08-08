import React from 'react'
import { Card, Form, Input, Button, Checkbox, Radio, Select, DatePicker, InputNumber, Cascader } from 'antd'
import moment from 'moment'

const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const Option = Select.Option;
const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }, {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'suzhou',
        label: 'Suzhou',
        children: [{
            value: 'huqiuqu',
            label: 'Hu Qiu District',
        }],
    }],
}];

class FormRegister extends React.Component {
    state = {
        checked: false
    }

    handleCheckBoxChange = () => {
        this.setState({checked: !this.state.checked})
    }

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo));
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 4 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 20 },
          },
        };

        const offsetLayout = {
            wrapperCol: {
                xs: { span: 24 },
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }

        return (
            <div>
                <Card title="注册表单">
                    <Form >
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName',{
                                    rules: [{
                                        required: true,
                                        message: '用户名不能为空'
                                    }]
                                })(
                                    <Input style={{width: '300px'}} placeholder="请输入用户名" />
                                )
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd',{
                                    rules: [{
                                        required: true,
                                        message: '密码不能为空'
                                    }]
                                })(
                                    <Input type="password" style={{width: '300px'}} placeholder="请输入密码" />
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex',{
                                    initialValue: '1'
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age',{
                                    initialValue: 18
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>
                        <FormItem label="当前城市" {...formItemLayout}>
                            {
                                getFieldDecorator('city',{
                                    initialValue: 'suzhou'
                                })(
                                    <Select>
                                        <Option value="beijign">北京</Option>
                                        <Option value="shanghai">上海</Option>
                                        <Option value="suzhou">苏州</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="出生日期" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday',{
                                    initialValue: moment('2018-08-08'),
                                })(
                                    <DatePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address',{
                                    initialValue: '',
                                })(
                                    <Cascader
                                        options={options}
                                        placeholser="Please select"
                                        />
                                )
                            }
                        </FormItem>
                        <FormItem label="" {...offsetLayout}>
                            {
                                getFieldDecorator('agree')(
                                    <Checkbox onChange={this.handleCheckBoxChange}>我已阅读且同意<a href="#">隐私协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem label="" {...offsetLayout}>
                            {
                                getFieldDecorator('submit')(
                                    <Button disabled={!this.state.checked} type="primary" onClick={this.handleSubmit}>注册</Button>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default Form.create()(FormRegister);