import React from 'react';
import { Card, Table, Modal, message, Button } from 'antd';
import Utils from '../../utils/utils'
import axios from '../../axios/index';

export default class BasicTable extends React.Component {
    state = {
        dataSource: [],
        selectedRowKeys: '',
        selectedItem: ''
    }

    params = {
        page: 1
    }

    request = () => {
        axios.ajax({
            url: '/table/high/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then(res => {
            if (res.code === 0) {
                res.result.list.map((item, index) => {
                    item.key = index;
                })
                this.setState({
                    dataSource: res.result.list,
                    selectedRowKeys: [],
                    selectedRows: null
                })
            }
        })
    }

    handleDelete = (() => {
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item) => {
            ids.push(item.id)
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

    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortOrder: sorter.order
        })
    }

    componentDidMount() {
        this.request();
    }


    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '年龄',
                dataIndex: 'age',
                width: 80,
                sorter: (a,b) => {
                    return a.age - b.age
                },
                sortOrder: this.state.sortOrder
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    return state === 1 ? '骑行中' : '空闲中'
                },
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 120
            }
        ]

        return (
            <div>
                <Card title="头部固定">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y:240}}>
                    </Table>
                </Card>
                <Card title="左侧固定" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange} >
                    </Table>
                </Card>
            </div>
        );
    }
}