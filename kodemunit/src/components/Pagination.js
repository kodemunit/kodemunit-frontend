import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="container">
        <div className="showcase">
        <Swiper
            slidesPerView="auto"
            // centeredSlides={true}
            // a11y={true}
            // keyboardControl={true}
            grabCursor={true}
          >
            {numbers.map((number, index) => (
              <SwiperSlide key={index}>
                <span>{number}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Pagination
