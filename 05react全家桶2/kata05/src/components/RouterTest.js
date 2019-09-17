import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

function ProductList() {
    return <div>ProductList</div>;
}

function ProductMgt() {
    return <div>ProductMgt</div>;
}

function Detail({ match, history, location }) {
    return (
        <div>
            detail: { match.params.name }
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
            <div>
                <Route exact path="/" component={ ProductList } />
                <Route path="/management" component={ ProductMgt } />
                <Route path="/detail/:name" component= { Detail } />
            </div>
        </BrowserRouter>
    )
}