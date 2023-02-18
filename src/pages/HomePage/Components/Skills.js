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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac sodales lacus. Aliquam ac enim a neque imperdiet tincidunt. Proin tincidunt lorem in velit dignissim efficitur.",
    },
    {
      name: "Css / Scss",
      percent: "50%",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac sodales lacus. Aliquam ac enim a neque imperdiet tincidunt. Proin tincidunt lorem in velit dignissim efficitur.",
    },
    {
      name: "JavaScript",
      percent: "40%",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac sodales lacus. Aliquam ac enim a neque imperdiet tincidunt. Proin tincidunt lorem in velit dignissim efficitur.",
    },
    {
      name: "React",
      percent: "50%",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac sodales lacus. Aliquam ac enim a neque imperdiet tincidunt. Proin tincidunt lorem in velit dignissim efficitur.",
    },
    {
      name: "Node.js",
      percent: "20%",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac sodales lacus. Aliquam ac enim a neque imperdiet tincidunt. Proin tincidunt lorem in velit dignissim efficitur.",
    },
    {
      name: "Express.js",
      percent: "20%",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac sodales lacus. Aliquam ac enim a neque imperdiet tincidunt. Proin tincidunt lorem in velit dignissim efficitur.",
    },
    {
      name: "MongoDB",
      percent: "20%",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac sodales lacus. Aliquam ac enim a neque imperdiet tincidunt. Proin tincidunt lorem in velit dignissim efficitur.",
    },
    {
      name: "Git / Github",
      percent: "50%",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac sodales lacus. Aliquam ac enim a neque imperdiet tincidunt. Proin tincidunt lorem in velit dignissim efficitur.",
    }
  ]
  const skill = allSkills.map(val => <Skill name={val.name} percent={val.percent} description={val.description}/>)

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
        <div className="section-title">
          <h2>My skills</h2>
        </div>
        <div className="skill-list" ref={ref}>
          {skill}
        </div>
      </div>
    </section>
  )
}