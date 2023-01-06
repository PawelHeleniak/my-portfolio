import React from 'react'
import { Skill } from './Skill'

export const Skills = () => {
  const allSkills = [
    {
      name: "Html",
      percent: "60%",
      use: "yes",
    },
    {
      name: "Css / Scss",
      percent: "60%",
      use: "yes",
    },
    {
      name: "JavaScript",
      percent: "40%",
      use: "yes",
    },
    {
      name: "React",
      percent: "50%",
      use: "yes",
    },
    {
      name: "Node.js",
      percent: "30%",
      use: "yes",
    },
    {
      name: "Express.js",
      percent: "30%",
      use: "yes",
    },
    {
      name: "MongoDB",
      percent: "30%",
      use: "yes",
    },
    {
      name: "Git / Github",
      percent: "60%",
      use: "yes",
    },
    {
      name: "Vue",
      percent: "0%",
      use: "no",
    },
    {
      name: "TypeScript",
      percent: "0%",
      use: "no",
    },
  ]
  const skillUsed = allSkills.filter(val => val.use === "yes").map(val => <Skill name={val.name} percent={val.percent} />)
  const skillToLearn = allSkills.filter(val => val.use === "no").map(val => <Skill name={val.name} percent={val.percent} />)

  return (
    <section>
      <div className="wrapper skills">
        <div className="skillList">
          <h2>Programs that I use and still learn</h2>
          {skillUsed}
        </div>
        <div className="skillList">
          <h2>Programs that I want to learn</h2>
          {skillToLearn}
        </div>
      </div>
    </section>
  )
}