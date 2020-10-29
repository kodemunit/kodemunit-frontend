import React from "react"

const Works = ({ projects }) => {
  return (
    <div className="clients-projects">
      <div className="container">
        {projects.map(({ name, about, url, category, imgSrc }, index) => (
          <article>
            <div className="before"></div>
            <div className="project">
              <div className="descr">
                <h2>{name}</h2>
                <p>{about}</p>
                <div className="categories">
                  {category.map((item, index) => (
                    <span key={index}>#{item}</span>
                  ))}
                </div>
                <a href={url}>Visit Site</a>
              </div>
              <div className="project-image">
                <img src={imgSrc} alt={name} />
              </div>
            </div>
            <div className="after"></div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Works
