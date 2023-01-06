import React from 'react'
import { Project } from './Project'

//img
import todoImg from '../../../assets/img/todo-app.png'
import tictactoeImg from '../../../assets/img/tictactoe-app.png'

export const Projects = () => {
  const allProjects = [
    {
      name: "Todo app",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis augue finibus, gravida nisl sed, efficitur massa. Phasellus eu semper mauris, vitae tincidunt elit.",
      img: todoImg,
      imgAlt: "Application for saving tasks",
      link: "https://pawelheleniak.github.io/todo-app/",
    },
    {
      name: "TicTacToe game",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis augue finibus, gravida nisl sed, efficitur massa. Phasellus eu semper mauris, vitae tincidunt elit.",
      img: tictactoeImg,
      imgAlt: "Tic Tac Toe is simple game",
      link: "https://pawelheleniak.github.io/tictactoe-app/",
    },
  ]
  const project = allProjects.map(val => <Project value={val} />)

  return (
    <section>
      <div className="wrapper projects">
        {project}
      </div>
    </section>
  )
}