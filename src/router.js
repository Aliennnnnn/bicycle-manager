import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/button'
import NoMatch from './pages/nomatch'

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                <Route path="/" component={App}>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons} />
                                {/* 匹配不到路由时显示 404 页面*/}
                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    } />
                </Route>
                </div>
            </HashRouter>
        )
    }
}