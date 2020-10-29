import React from "react"
import { Link } from "react-router-dom"

// components
import Banner from "../../../components/Banner"

// images
import featuredImg from "../../../assets/images/food-uber.png"

const ProductsPage = () => {
  return (
    <div>
      <Banner
        title1="Discover Our "
        title2="Different Products."
        descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ultrices sit ac, donec libero lectus pellentesque. Viverra vestibulum netus lectus lacus pretium risus et faucibus volutpat."
      >
        <div className="featured-product">
          <img src={featuredImg} alt=""/>
        </div>
      </Banner>
      {/* <Link to="/products/kodemunit">Kodemunit</Link> */}
    </div>
  )
}

export default ProductsPage
