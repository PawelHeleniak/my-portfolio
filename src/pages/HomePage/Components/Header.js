import React from 'react'
import downArrow from '../../../assets/img/down_arrow.svg'

export const Header = () => {
  return (
    <header>
      <div className="wrapper header">
        <div className="primaryDescription">
          <div className="headingBox first">
            <h2>Hello,</h2>
          </div>
          <div className="headingBox secound">
            <h2>I`m Paweł Heleniak</h2>
          </div>
          <div className="headingBox third">
            <h2>Front end developer</h2>
          </div>
        </div>
        <div className="secoundaryDescription">
          <p>I'm learning to create websites in modern technologies, the main technologies I used: JavaScript, React, Css/Scss</p>
        </div>
        <div className="options">
          <h3><a href="#skills">My skills</a></h3>
          <h3><a href="#projects">My works</a></h3>
          <h3><a href="#contact">Contact</a></h3>
        </div>
        <div className="scrollDown">
          <div className="arrow">
            <img src={downArrow} alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}