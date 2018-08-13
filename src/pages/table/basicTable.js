import React from 'react';
import { Card, Table } from 'antd';
import axios from '../../axios/index';

export default class BasicTable extends React.Component {
    state = {
        dataSource2: [],
        selectedRowKeys: '',
        selectedItem: ''
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
                res.result.map((item,index) => {
                    item.key = index
                })
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
                state: 1,
                address: '江苏省苏州市虎丘区'
            },
            {
                id: '2',
                userName: 'CoCo',
                state: 0,
                address: '江苏省苏州市虎丘区'
            },
            {
                id: '3',
                userName: 'Mick',
                state: 1,
                address: '江苏省苏州市虎丘区'
            }
        ]
        dataSource.map((item, index) => {
            item.key = index
        })
        this.setState({ dataSource })
    }

    onRowClick = (record, index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
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
                dataIndex: 'state',
                render(state){
                    return state === 1 ? '骑行中' : '空闲中'
                }
            },
            {
                title: '地址',
                dataIndex: 'address'
            }
        ]

        const {selectedRowKeys} = this.state;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }

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
                <Card title="动态数据渲染表格-Mock" style={{margin: '10px 0'}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}>
                    </Table>
                </Card>
                <Card title="Mock-单选" style={{margin: '10px 0'}}>
                    <Table
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index)
                                }
                            }
                        }}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}>
                    </Table>
                </Card>
            </div>
        );
    }
}