import React from 'react'
import { Card, Button, Modal } from 'antd'
import './ui.less'

export default class Buttons extends React.Component {
    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false,
    }
    handleClick = (type) => {
        this.setState({
            [type]: true
        })
    }
    handleConfirm = (type) => {
        Modal[type]({
            title: '确定吗?',
            content: '确定要执行吗？',
            onOk() {
                console.log('ok');
            },
            onCancel() {
                console.log('cancel');
            }
        })
    }

    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleClick('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleClick('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleClick('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleClick('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('error')}>Error</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
                </Card>
                <Modal
                    wrapClassName="vertical-center-modal"
                    title="React"
                    visible={this.state.confirmModal1}
                    onCancel={() => this.setState({ confirmModal1: false})}>
                    <p>Modal</p>
                </Modal>
            </div>
        );
    }
}