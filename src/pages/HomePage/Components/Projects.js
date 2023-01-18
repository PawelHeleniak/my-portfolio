import React from 'react'
import { Project } from './Project'

//img
import todoImg from '../../../assets/img/todo-app.png'
import tictactoeImg from '../../../assets/img/tictactoe-app.png'

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
  ]
  const project = allProjects.map(val => <Project value={val} />)

  return (
    <section id='projects'>
      <div className="wrapper projects">
        <div className="sectionTitle">
          <h2>My projects</h2>
        </div>
        {project}
      </div>
    </section>
  )
}