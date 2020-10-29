import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

let categories = [
  "Web",
  "Design",
  "Applications",
  "eCommerce",
  "etc",
  "Web",
  "Design",
  "Applications",
  "eCommerce",
  "etc",
  "Web",
  "Design",
  "Applications",
  "eCommerce",
  "etc",
  "Web",
  "Design",
  "Applications",
  "eCommerce",
  "etc",
  "Web",
  "Design",
  "Applications",
  "eCommerce",
  "etc",
  "Web",
  "Design",
  "Applications",
  "eCommerce",
  "etc",
]

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <p>Filter By Categories</p>
        <div className="showcase">
          <Swiper
            slidesPerView="auto"
            // centeredSlides={true}
            // a11y={true}
            // keyboardControl={true}
            grabCursor={true}
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <span>{category}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Categories
