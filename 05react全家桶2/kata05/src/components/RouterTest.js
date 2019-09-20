import React from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'

function ProductList() {
    return <div>ProductList</div>;
}

function ProductMgt() {
    return (
        <div>
            <h3>ProductMgt</h3>
            <Link to="/management/add">新增商品</Link>
            <span> | </span>
            <Link to="/management/search">搜索商品</Link>
            <Route path="/management/add" component={() => <div>add</div>}></Route>
            <Route path="/management/search" component={() => <div>search</div>}></Route>
        </div>
    )
}

function Detail({ match, history, location }) {
    return (
        <div>
            detail: { match.params.name }
        </div>
    )
}

function PrivateRoute({ component: Component, isLogin, ...rest }) {
    return (
        <Route {...rest} render={props => isLogin ? (
            <Component {...props}/>
        ): (
            <Redirect 
                to={{ 
                        pathname: '/login',
                        state: {redirect: props.location.pathname,
                    }
                }}
                />
                )
            } 
        />
    )
}
function Login({ location, isLogin, login }) {
    console.log('login - ', location, isLogin, login)
    const redirect = location.state.redirect || "/" // 重定向地址
    if (isLogin) return <Redirect to={redirect} />
    return (
    <div>
    <p>用户登录</p>
    <hr />
    <button onClick={login}>登录</button>
    </div>
    )
}
export default function RouterTest() {
    
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">商品列表</Link>
                <span> | </span>
                <Link to="/management">商品管理</Link>
                <span> | </span>
                <Link to="/detail/web">明细</Link>
            </nav>
            <Switch>
                <Route exact path="/" component={ ProductList } />
                <PrivateRoute path="/management" component={ ProductMgt } isLogin= { false }/>
                <Route path="/login" component= {Login} login={() => {
                    console.log('登录成功')
                }} isLogin = {false}/>
                <Route path="/detail/:name" component= { Detail } />
                <Route component={() => <h3>页面不存在</h3>}></Route>
            </Switch>
        </BrowserRouter>
    )
}