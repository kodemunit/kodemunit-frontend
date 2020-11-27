import React from "react"
import { Link } from "react-router-dom"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"

// data
import projects from "../../data/projects"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <header>
          <h2>Featured Projects</h2>
        </header>
        <div className="showcase">
          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            navigation
            // keyboardControl={true}
            grabCursor={true}
          >
            {projects.map(({ name, url, imgSrc, category, product }, index) => (
              <SwiperSlide key={index}>
                <article key={index}>
                  <div className="top-details">
                    <h3>{name}</h3>
                    {category && <p>#{category[0]}</p>}
                  </div>
                  <picture>
                    {/* <source media="(min-width:650px)" srcSet={imgSrc} />
                  <source media="(min-width:465px)" srcSet="" /> */}
                    <img src={imgSrc} alt={name} />
                  </picture>
                  <div className="project-details">
                    {product ? (
                      <>
                        {product.cost ? (
                          <div className="project product">
                            <a href={`${product.demo}`}>Visit Demo</a>
                            <Link to="/">View Details</Link>
                            <a href="#!">Purchase</a>
                          </div>
                        ) : (
                          <div className="core-product project">
                            <a href={product.url}>Visit Site</a>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="client-project project">
                        <a href={url}>Visit Site</a>
                      </div>
                    )}
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="arrows"></div>
      </div>
    </section>
  )
}

export default Projects
