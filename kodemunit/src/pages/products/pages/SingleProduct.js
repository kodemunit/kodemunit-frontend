import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// css
import "../../../styles/pages/product.sass"

// components
import appImg from "../../../assets/images/app.png"

// gallery
import pg1 from "../../../assets/images/pg1.png"
import pg2 from "../../../assets/images/pg2.png"
import pg3 from "../../../assets/images/pg3.png"
import pg4 from "../../../assets/images/pg4.png"
import pg5 from "../../../assets/images/pg5.png"
import pg6 from "../../../assets/images/pg6.png"
import pg7 from "../../../assets/images/pg7.png"

let gallery = [pg1, pg2, pg3, pg4, pg5, pg6, pg7]

const SingleProduct = () => {
  return (
    <div className="page product-page">
      <div className="img-container">
        <div className="container">
          <img src={appImg} alt="app name" />
        </div>
      </div>
      <div className="app-descriptions">
        <div className="container">
          <h2>App Name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            eleifend ultrices sit ac, donec libero lectus pellentesque. Viverra
            vestibulum netus lectus lacus pretium risus et faucibus volutpat.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            eleifend ultrices sit ac, donec libero lectus pellentesque. Viverra
            vestibulum netus lectus lacus pretium risus et faucibus volutpat.
          </p>
        </div>
      </div>
      <div className="gallery">
        <h3>App Gallery</h3>
        <div className="showcase">
          <Swiper slidesPerView="auto" grabCursor={true} spaceBetween={10}>
            {gallery.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="gallery-item">
                  <img src={item} alt="gellery" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
