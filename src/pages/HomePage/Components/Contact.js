import React from 'react'
import githubIcon from '../../../assets/img/github-mark-white.png'
import emailIcon from '../../../assets/img/email_icon.png'
import cvIcon from '../../../assets/img/download_icon.png'

import downloadCv from '../../../assets/files/Pawel_Heleniak_CV_P.pdf'
export const Contact = () => {

  return (
    <section id='contact'>
      <div className="wrapper contact">
        <div className="sectionTitle">
          <h2>Contact</h2>
        </div>
        <div className="information">
          <p>Paweł Heleniak</p>
          <p>Lublin, Poland</p>
        </div>
        <div className="iconContainer">
          <a href="https://github.com/PawelHeleniak"><img src={githubIcon} alt="Github profile" /></a>
          <a href="mailto:pawel.heleniak@outlook.com"><img src={emailIcon} alt="Write an email" /></a>
          <a href={downloadCv} download><img src={cvIcon} alt="Download CV" /></a>
        </div>
      </div>
    </section>
  )
}