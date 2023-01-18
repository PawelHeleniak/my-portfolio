import React, { useRef, useEffect } from 'react'
import { Skill } from './Skill'
//Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const allSkills = [
    {
      name: "Html",
      percent: "60%",
    },
    {
      name: "Css / Scss",
      percent: "60%",
    },
    {
      name: "JavaScript",
      percent: "40%",
    },
    {
      name: "React",
      percent: "50%",
    },
    {
      name: "Node.js",
      percent: "25%",
    },
    {
      name: "Express.js",
      percent: "25%",
    },
    {
      name: "MongoDB",
      percent: "25%",
    },
    {
      name: "Git / Github",
      percent: "50%",
    }
  ]
  const skill = allSkills.map(val => <Skill name={val.name} percent={val.percent} />)

  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current.querySelectorAll('.progress');

    gsap.fromTo(el, { x: '-100%' }, {
      x: '0', stagger: 0.1, scrollTrigger: {
        trigger: el,
        start: "top 60%",
      }
    })
  })

  return (
    <section id='skills'>
      <div className="wrapper skills">
        <div className="sectionTitle">
          <h2>My skills</h2>
        </div>
        <div className="skillList" ref={ref}>
          {skill}
        </div>
      </div>
    </section>
  )
}