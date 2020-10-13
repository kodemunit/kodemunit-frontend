import React from "react"
import { Link } from "react-router-dom"

// data
import projects from "../../data/projects"

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <header>
          <h2>Featured Projects</h2>
        </header>
        <div className="showcase">
          {projects.map(
            ({ name, slug, url, imgSrc, category, product }, index) => (
              <article key={index}>
                <div className="top-details">
                  <h3>{name}</h3>
                  {category && <p>#{category[0]}</p>}
                </div>
                <picture>
                  <source media="(min-width:650px)" srcSet="" />
                  <source media="(min-width:465px)" srcSet="" />
                  <img src="" alt="" />
                </picture>
                <div className="project details">
                  {product ? (
                    <div className="product">
                      {product.cost ? (
                        <>
                          <a href={`${product.demo}`}>Visit Demo</a>
                          <Link to="/">View Details</Link>
                          <a href="#!">Purchase</a>
                        </>
                      ) : (
                        <>
                          <Link to="/">Visit Site</Link>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="client-project">
                      <Link to="/">Visit Site</Link>
                    </div>
                  )}
                </div>
              </article>
            )
          )}
        </div>
        <div className="arrows"></div>
      </div>
    </section>
  )
}

export default Projects
