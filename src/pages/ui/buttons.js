import React from 'react'
import { Card, Button } from 'antd'
import './ui.less'

const ButtonGroup = Button.Group;
export default class Buttons extends React.Component {
    state = {
        loading: false,
        iconLoading: false
    }
    enterLoading = () => {
        this.setState({loading: true});
    }
    enterIconLoading = () => {
        this.setState({iconLoading: true})
    }
    render() {
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">Primary</Button>
                    <Button type="default">Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button disabled>Disabled</Button>
                </Card>
                <Card title="图标按钮" className="card-wrap">
                    <Button type="primary" icon="search">Search</Button>
                    <Button type="default" shape="circle" icon="search" />
                    <Button type="primary" icon="download">Download</Button>
                    <Button type="default" shape="circle" icon="download" />
                </Card>
                <Card title="Loading 按钮" className="card-wrap">
                    <Button type="primary" loading>Loading</Button>
                    <Button type="default" loading shape="circle" />
                    <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>Click Me!</Button>
                    <Button type="primary" loading={this.state.iconLoading} icon="poweroff" onClick={this.enterIconLoading}>Click Me!</Button>
                </Card>
                <Card title="按钮组" className="card-wrap">
                    <ButtonGroup>
                        <Button type="primary" icon="left">Backward</Button>
                        <Button type="primary" icon="right">Forward</Button>
                    </ButtonGroup>
                </Card>
            </div>
        );
    }
}