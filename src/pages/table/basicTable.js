import React from 'react';
import { Card, Table, Modal, message, Button } from 'antd';
import Utils from '../../utils/utils'
import axios from '../../axios/index';

export default class BasicTable extends React.Component {
    state = {
        dataSource2: [],
        selectedRowKeys: '',
        selectedItem: ''
    }

    params ={
        page: 1
    }

    request = () => {
        let _this = this;
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then(res => {
            if(res.code === 0){
                res.result.list.map((item, index) => {
                    item.key = index;
                    return item;
                })
                this.setState({
                    dataSource2: res.result.list,
                    selectedRowKeys: [],
                    selectedRows: null,
                    pagination: Utils.pagination(res,(current)=>{
                        _this.params.page = current;
                        this.request();
                    })
                })
            }
        })
    }

    handleDelete = (() => {
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item) => {
            ids.push(item.id)
            return item;
        })
        Modal.confirm({
            title: '删除提示',
            content: `确定要删除这些数据吗？${ids.join(',')}`,
            onOk: () => {
                message.success('删除成功')
                this.request();
            }
        })
    })

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
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
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
                <Card title="Mock-多选" style={{margin: '10px 0'}}>
                    <div>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table
                        bordered
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}>
                    </Table>
                </Card>
                <Card title="Mock-分页" style={{margin: '10px 0'}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}>
                    </Table>
                </Card>
            </div>
        );
    }
}