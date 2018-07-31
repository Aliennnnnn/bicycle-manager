import React from 'react';
import Child from './child'
import { Button } from 'antd'
import './index.less'


export default class Life extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleAdd = () => {
       this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div className="content">
                <p>React生命周期</p>
                <Button onClick={this.handleAdd}>click</Button>
                <p>{this.state.count}</p>
                <Child name="jack"></Child>
            </div>

        );
    }
}