import React from 'react'
import githubIcon from '../../../assets/img/github-mark-white.png'
import cvIcon from '../../../assets/img/download_icon.png'

import downloadCv from '../../../assets/files/Pawel_Heleniak_CV_P.pdf'
export const Contact = () => {

  return (
    <section>
      <div className="wrapper contact">
        <div className="information">
          <p>Paweł Heleniak</p>
          <p>Lublin, Poland</p>
          <p>pawel.heleniak@outlook.com</p>
        </div>
        <div className="iconContainer">
          <a href="https://github.com/PawelHeleniak"><img src={githubIcon} alt="" /></a>
          <a href={downloadCv} download><img src={cvIcon} alt="" /></a>
        </div>
      </div>
    </section>
  )
}