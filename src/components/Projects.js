import React from 'react'
import pr1 from '../codeworms.jpg'
import pr2 from '../family.jpg'

const Projects = () => {
    return (
        <div className="wrapper">
        <h1 className="about-heading">Project Essential Connections</h1>
 

<div className = "buttonField">
    <p>The goal of Essential Connections project is to help people stay in touch with people who need them. Essential Connections invites us to create a list of family members, friends and other people who are important in our lives and take an active role in checking up on them, remembering their important dates and keeping a live, genuine, informed connection. The app uses Jquery, Foundations, New York Times Api.  
  </p>
 

  <div id="projectImg"><img id="connect" src={pr2}  alt="portfolio pic"/></div>
 
      <a className="btn" href="https://mrramontorres.github.io/project-1/index.html">Essential Connections</a>
    </div>
    
    <br></br>
      <h1 className="about-heading">Project Bookworms</h1>

      <p>Virtual book club, where friends can have meaningful discussions about books, have fun, share ideas and learn.
      </p>
      <div className = "buttonField">
      <div id="projectImg"><img id="connect" src={pr1}  alt="portfolio pic"/></div>
      
          <a className="btn" href="https://pacific-eyrie-86247.herokuapp.com/home">Bookworms</a>

          <br></br>
        </div>
      
    </div>
    )
}

export default Projects
