import React from 'react'

export const Skill = ({ name, percent }) => {
  return (
    <div className="skillBox">
      <p>{name}</p>
      <div className="progressBar">
        <div className="progress" style={{ "width": `${percent}`, }}></div>
        <span>{percent}</span>
      </div>
    </div >
  )
}