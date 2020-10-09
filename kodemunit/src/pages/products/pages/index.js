import React from 'react'
import {Link} from "react-router-dom"

const ProductsPage = () => {
    return (
        <div>
            Products page
            <Link to="/products/kodemunit">Kodemunit</Link>
        </div>
    )
}

export default ProductsPage
