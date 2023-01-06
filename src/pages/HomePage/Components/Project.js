import React from 'react'

export const Project = (props) => {
  const { name, description, img, imgAlt, link } = props.value;

  return (
    <section>
      <div className="wrapper projects">
        <div className="project">
          <div className="projectImage">
            {/* <p>{name}</p> */}
            <img src={img} alt={imgAlt} />
          </div>
          <div className="projectDescription">
            <p>{description}</p>
          </div>
          <div className="projectLink">
            <a href={link}>Demo</a>
          </div>
        </div>
      </div>
    </section>
  )
}