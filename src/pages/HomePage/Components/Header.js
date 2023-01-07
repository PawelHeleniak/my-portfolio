import React from 'react'

export const Header = () => {
  return (
    <header>
      <div className="wrapper header">
        <div className="primaryDescription">
          <h1 className='first'>Hello,</h1>
          <h1 className='secound'>I`m Paweł</h1>
          <h2 className='third'>Front end developer</h2>
        </div>
        <div className="secoundaryDescription">
          <p>I'm learning to create websites in modern technologies, the main technologies I used: JavaScript, React, Css/Scss</p>
        </div>
      </div>
    </header>
  )
}