import React from 'react'
import downArrow from '../../../assets/img/down_arrow.svg'

export const Header = () => {
  return (
    <header>
      <div className="wrapper header">
        <div className="headerBox left">
          <div className="primaryDescription">
            <div className="headingBox first">
              <h1>Hello,</h1>
            </div>
            <div className="headingBox secound">
              <h2>I`m <span>Paweł Heleniak</span></h2>
            </div>
            <div className="headingBox third">
              <h2>Front end developer</h2>
            </div>
          </div>
          <div className="secoundaryDescription">
            <p>I'm learning to create websites in modern technologies, the main technologies I used: JavaScript, React, Css/Scss</p>
          </div>
        </div>
        <div className="headerBox right">
          <div className="options">
            <h3><a href="#skills">My skills</a></h3>
            <h3><a href="#projects">My works</a></h3>
            <h3><a href="#contact">Contact</a></h3>
          </div>
          <div className="scrollDown">
            <div className="arrow">
              <a href="#skills"><img src={downArrow} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}