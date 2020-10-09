import React from 'react'
import {Switch, Route, useRouteMatch} from "react-router-dom"


// pages
import ProductsPage from "./pages/"
import SingleProduct from "./pages/SingleProduct"

const Products = () => {
    let { path } = useRouteMatch();
    return (
        <div className="page products-page">
            <Switch>
                <Route exact path={`${path}/`} component={ProductsPage}/>
                <Route path={`${path}/:product`} component={SingleProduct} />
            </Switch>
        </div>
    )
}

export default Products
