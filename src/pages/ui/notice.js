import React from 'react'
import { Card, Button, notification, message } from 'antd'
import './ui.less'

export default class Notice extends React.Component {
    openNotification = (type) => {
        notification[type]({
            message: 'Message',
            description: `This is a ${type} message.`,
            duration: 4.5
        })
    }
    openMessage = (type) => {
        message[type](`This is a ${type} message.`);
    }
    render() {
        return (
            <div>
                <Card title="Notification" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.openNotification('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning')}>Warning</Button>
                </Card>
                <Card title="Message" className="card-wrap">
                    <Button type="primary" onClick={() => this.openMessage('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.openMessage('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.openMessage('warning')}>Warning</Button>
                </Card>
            </div>
        )
    }
}