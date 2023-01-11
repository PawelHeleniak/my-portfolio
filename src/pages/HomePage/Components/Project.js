import React, { useEffect, useRef } from 'react'

//Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Project = (props) => {
  const { name, description, img, imgAlt, link } = props.value;

  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(el, { opacity: 0, y: '50' }, {
      opacity: 1, y: '0', duration: 1, scrollTrigger: {
        trigger: el,
        start: "top 60%",
      }
    })
  })

  return (
    <div className="project" ref={ref}>
      <div className="projectImage">
        <img src={img} alt={imgAlt} />
      </div>
      <div className="informationWrapper">
        <div className="projectDescription">
          <div className="title">
            <h3>{name}</h3>
          </div>
          <p>{description}</p>
        </div>
        <div className="projectLink">
          <a href={link}>Demo</a>
        </div>
      </div>
    </div>
  )
}