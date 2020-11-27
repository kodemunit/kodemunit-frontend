import React from "react"
import { FaQuoteLeft } from "react-icons/all"
// import SwiperCore, { coverflowEffect } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// avatars
import ceeptz from "../../assets/images/avatars/ceeptz.png"
import kilimoshare from "../../assets/images/avatars/kilimoshare.png"
import ladyburg from "../../assets/images/avatars/ladyburg.png"

let testimonies = [
  {
    name: "Bonnie Green",
    company: "LadyBurg Org",
    title: "CEO LadyBurg Org",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget duis velit, nibh sit nam odio. Ante nunc mi magnis semper condimentum dui.Lorem ipsum",
    avatar: ladyburg,
  },
  {
    name: "Revocatus Kihongo",
    company: "SOZ Pns",
    title: "Producer Soz Music Studio",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget duis velit, nibh sit nam odio. Ante nunc mi magnis semper condimentum dui.Lorem ipsum",
    avatar: kilimoshare,
  },
  {
    name: "Margareth Curthbert",
    company: "CEEPTz",
    title: "CEO CEEPTz",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget duis velit, nibh sit nam odio. Ante nunc mi magnis semper condimentum dui.Lorem ipsum",
    avatar: ceeptz,
  },
  {
    name: "Shani Selemani",
    company: "KilimoShare",
    title: "Co-Founder Kilimoshare",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget duis velit, nibh sit nam odio. Ante nunc mi magnis semper condimentum dui.Lorem ipsum",
    avatar: kilimoshare,
  },
]

// SwiperCore.use([])

const Testimonies = () => {
  return (
    <section className="testimonials">
      <h2>What our clients say about us</h2>
      <div className="container">
        <div
          className="showcase"
        >
          <Swiper
            spaceBetween={0}
            // centeredSlides={true}
            // a11y={true}
            // keyboardControl={true}
            effect="coverflow"
            coverflowEffect="" //{
            // ((rotate = 50),
            // (stretch = 0),
            // (depth = 100),
            // (modifier = 1),
            // (slideShadows = true))
            // }
            grabCursor={true}
            breakpoints={{
              768: {
                width: 768,
                slidesPerView: 1,
              },
              1200: {
                width: 1200,
                slidesPerView: 3,
              },
            }}
          >
            {testimonies.map(({ testimony, name, avatar, title }, index) => (
              <SwiperSlide key={index}>
                <article className="card">
                  <p>
                    <FaQuoteLeft className="icon" />
                    {testimony}
                  </p>
                  <h2>{name}</h2>
                  <h3>{title}</h3>
                  <div className="avatar-container">
                    <div className="avatar">
                      <img src={avatar} alt={`${title}`} />
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonies
