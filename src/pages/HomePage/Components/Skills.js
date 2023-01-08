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
      percent: "30%",
    },
    {
      name: "Express.js",
      percent: "30%",
    },
    {
      name: "MongoDB",
      percent: "30%",
    },
    {
      name: "Git / Github",
      percent: "60%",
    }
  ]
  const skill = allSkills.map(val => <Skill name={val.name} percent={val.percent} />)

  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current.querySelectorAll('.skillBox');

    gsap.fromTo(el, { y: '+100', opacity: 0 }, {
      y: '0', opacity: 1, stagger: 0.2, duration: 1, scrollTrigger: {
        trigger: el,
        start: "top 70%",
      }
    })
  })

  return (
    <section>
      <div className="wrapper skills">
        <div className="sectionTitle">
          <h2>My skills</h2>
        </div>
        <div className="skillList" ref={ref}>
          <h2>Programs that I use and still learn</h2>
          {skill}
        </div>
      </div>
    </section>
  )
}