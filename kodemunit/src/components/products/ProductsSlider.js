import React from "react"
import { Link } from "react-router-dom"

// projects
import projects from "../../data/projects"

// project image
import ProjectImg from "../../assets/images/food-uber.png"

const ProductsSlider = () => {
  return (
    <div className="products-showcase">
      <div className="showcase">
        {projects.map(({ name, about, imgSrc, url, slug, type }, index) => (
          <div className="card" key={index}>
            <div className="card__content">
              <h2>{name}</h2>
              <p>{about}</p>
              <Link to={`/products/${slug}`} className="btn btn-secondary">
                Learn More
              </Link>
            </div>
            <div className="card__image">
              <img src={ProjectImg} alt={name} />
            </div>
            <div className="project-url">
              <a href={url} className="btn btn-primary">
                {type === "website" ? "Visit Site" : "Download Demo App"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsSlider
