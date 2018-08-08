import React from 'react';
import { Card, Table } from 'antd';
import axios from '../../axios/index';

export default class BasicTable extends React.Component {
    state = {
        dataSource2: []
    }

    request = () => {
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: 1
                }
            }
        }).then(res => {
            if(res.code === 0){
                this.setState({
                    dataSource2: res.result
                })
            }
        })
    }

    componentWillMount(){
        this.request();
    }

    componentDidMount() {
        const dataSource = [
            {
                id: '1',
                userName: 'Jack',
                state: '1',
                address: '江苏省苏州市虎丘区'
            },
            {
                id: '2',
                userName: 'CoCo',
                state: '1',
                address: '江苏省苏州市虎丘区'
            },
            {
                id: '3',
                userName: 'Mick',
                state: '1',
                address: '江苏省苏州市虎丘区'
            }
        ]
        this.setState({ dataSource })
    }
    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '状态',
                dataIndex: 'state'
            },
            {
                title: '地址',
                dataIndex: 'address'
            }
        ]
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}>
                    </Table>
                </Card>
                <Card title="动态数据渲染表格" style={{margin: '10px 0'}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}>
                    </Table>
                </Card>
            </div>
        );
    }
}