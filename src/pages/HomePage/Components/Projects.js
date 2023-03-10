import React from 'react'
import { Project } from './Project'

//img
import todoImg from '../../../assets/img/todo-app.png'
import tictactoeImg from '../../../assets/img/tictactoe-app.png'
import holidayRentalImg from '../../../assets/img/holiday-rental.png'

export const Projects = () => {
  const allProjects = [
    {
      name: "Todo app v2",
      description: "Simple application allows for adding tasks for future days. Additionally, it allows you to edit and sort tasks.",
      img: todoImg,
      imgAlt: "Application for saving tasks",
      link: "https://pawelheleniak.github.io/todo-app/",
    },
    {
      name: "TicTacToe game",
      description: "This is a 2-player game where you take turns in which by turns put crosses and circle. The ability to play with a bot is added",
      img: tictactoeImg,
      imgAlt: "Tic Tac Toe game",
      link: "https://pawelheleniak.github.io/tictactoe-app/",
    },
    {
      name: "Holiday rental website",
      description: "Site for renting cottages or hotels for a trip",
      img: holidayRentalImg,
      imgAlt: "Holiday rental website",
      link: "https://pawelheleniak.github.io/holiday-rental-website/",
    },
  ]
  const project = allProjects.map(val => <Project value={val} />)

  return (
    <section id='projects'>
      <div className="wrapper projects">
        <div className="section-title">
          <h2>My projects</h2>
        </div>
        {project}
      </div>
    </section>
  )
}