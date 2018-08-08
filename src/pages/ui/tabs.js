import React from 'react'
import { Card, Tabs, Icon } from 'antd'
import './ui.less'

const TabPane = Tabs.TabPane;
export default class Notice extends React.Component {
    handleChange = () => {
        console.log('You have changed tabs.')
    }

    render() {
        return (
            <div>
                <Card title="选项卡" className="card-wrap">
                    <Tabs onChange={this.handleChange}>
                        <TabPane key="1" tab={<span><Icon type="apple">Apple</Icon></span>}>Content of TabPane 1</TabPane>
                        <TabPane key="2" tab="Symbian" disabled>Content of TabPane 2</TabPane>
                        <TabPane key="3" tab={<span><Icon type="android">Android</Icon></span>}>Content of TabPane 3</TabPane>
                    </Tabs>
                </Card>
            </div>
        )
    }
}