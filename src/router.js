import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Tabs from './pages/ui/tabs'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'
import City from './pages/city/index'
import Common from './common.js'
import Order from './pages/order/index'
import User from './pages/user/index'
import BikeMap from './pages/map/bikeMap'
import Bar from './pages/echarts/bar'
import Pie from './pages/echarts/pie'
import Line from './pages/echarts/line'
import Permission from './pages/permission'
import OrderDetail from './pages/order/detail'
import NoMatch from './pages/nomatch/nomatch'

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons} />
                                <Route path="/admin/ui/modals" component={Modals} />
                                <Route path="/admin/ui/loadings" component={Loadings} />
                                <Route path="/admin/ui/notification" component={Notice} />
                                <Route path="/admin/ui/tabs" component={Tabs} />
                                <Route path="/admin/form/login" component={FormLogin} />
                                <Route path="/admin/form/reg" component={FormRegister} />
                                <Route path="/admin/table/basic" component={BasicTable} />
                                <Route path="/admin/form/high" component={HighTable} />
                                <Route path="/admin/city" component={City} />
                                <Route path="/admin/detail" component={Order} />
                                <Route path="/admin/user" component={User} />
                                <Route path="/admin/bikeMap" component={BikeMap} />
                                <Route path="/admin/bar" component={Bar} />
                                <Route path="/admin/pie" component={Pie} />
                                <Route path="/admin/line" component={Line} />
                                <Route path="/admin/permission" component={Permission} />
                                {/* 匹配不到路由时显示 404 页面*/}
                                <Route component={NoMatch} />

                            </Switch>
                        </Admin>
                    } />
                    <Route path="/common" render={() => {
                        return  <Common>
                                    <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                                </Common>
                    }} />
                </App>
            </HashRouter>
        )
    }
}