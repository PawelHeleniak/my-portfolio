import React, { useRef, useEffect } from 'react'
import githubIcon from '../../../assets/img/github-mark-white.png'
import linkedinIcon from '../../../assets/img/linkedin_icon.png'
import emailIcon from '../../../assets/img/email_icon.png'
import cvIcon from '../../../assets/img/download_icon.png'

import downloadCv from '../../../assets/files/Pawel_Heleniak_CV_P.pdf'

//Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {

  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(el, { y: '-100%', opacity: 0 }, {
      y: '0', opacity: 1, duration: 1, scrollTrigger: {
        trigger: el,
        start: "top 50%",
      }
    })
  })

  return (
    <section id='contact'>
      <div className="wrapper contact" ref={ref}>
        <div className="sectionTitle">
          <h2>Contact</h2>
        </div>
        <div className="information">
          <p>Paweł Heleniak</p>
          <p>Lublin, Poland</p>
        </div>
        <div className="iconContainer">
          <a href="https://github.com/PawelHeleniak"><img src={githubIcon} alt="Github profile" /></a>
          <a href="https://linkedin.com/in/paweł-heleniak-1882b2231"><img src={linkedinIcon} alt="Linkedin profile" /></a>
          <a href="mailto:pawel.heleniak@outlook.com"><img src={emailIcon} alt="Write an email" /></a>
          <a href={downloadCv} download><img src={cvIcon} alt="Download CV" /></a>
        </div>
      </div>
    </section>
  )
}