import React from 'react'
import MenuConfig from '../../config/menuConfig'
import { Menu, Icon } from 'antd'
import './index.less'

const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component {
    componentWillMount() {
        const menuTreeNode =  this.renderMenu(MenuConfig);
        this.setState({menuTreeNode});
    }
    // 菜单渲染，递归判断有没有下一级菜单
    renderMenu = (data) => {
        return data.map((item) => {
            if(item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="logo"/>
                    <h1>Bicycle Manager</h1>
                </div>
                <Menu className="menu" theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}