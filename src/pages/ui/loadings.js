import React from 'react'
import { Card, Spin, Icon, Alert } from 'antd'
import './ui.less'

export default class Loadings extends React.Component {
    render() {
        const icon = <Icon type="loading" />
        return (
            <div>
                <Card title="Spin" className="card-wrap">
                    <Spin size="small" />
                    <Spin style={{margin: '0 10px'}} />
                    <Spin indicator={icon} size="large" />
                </Card>
                <Card title="局部Loading" className="card-wrap">
                    <Alert message="React" description="欢迎来到共享单车后台管理系统" type="info" />
                    <Spin tip="加载中..." indicator={icon}>
                        <Alert message="React" description="欢迎来到共享单车后台管理系统" type="warning" />
                    </Spin>
                </Card>
            </div>
        )
    }
}