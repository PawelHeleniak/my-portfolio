import React from 'react'

export const Skill = ({ name, percent, description }) => {
  return (
    <div className="skill-box">
      <span>{name}</span>
      <div className="progress-bar">
        <div className="progress" style={{ "width": `${percent}`, }}></div>
      </div>
      <div className="description">
        <span>{description}</span>
      </div>
    </div >
  )
}