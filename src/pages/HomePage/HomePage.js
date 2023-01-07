import React from 'react'
import { Header } from './Components/Header'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'
import { Contact } from './Components/Contact'

export const HomePage = () => {
  return (
    <>
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}