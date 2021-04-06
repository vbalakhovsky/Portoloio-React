import React from 'react'

const Apps = () => {
    return (
        <div id="Apps"  className="wrapper">
        <h1 className="appsh"> My Apps</h1>
 

<div className = "buttonField">
    <p>I still remember the total feeling of panic, when I read the assignment. Write a multiple-choice quiz? They could have as well asked me to build a time machine or learn to fly. But JavaScript to the rescue, and line by line in vs code, the app began to come together. The final product is a multiple-choice quiz with timer and scores. It is built with JavaScript and Bootstrap.
  </p>
      <a className="btn" href="https://vbalakhovsky.github.io/Javascript-Quiz-in-Pink-and-Blue/">JavaScript Quiz</a>
      
      <br>
      </br>
   <p> Just when I felt so full of myself, having written the Quiz app, we began to learn Jquery. It felt like after I just began to “speak” vanilla JavaScript, the rules changed and there I was again staring at $signs, clueless. But just as coding can appear like an unsurmountable wall, it also, more than other fields that I studied, can be done in very small steps. Figuring out what variables needed to be declared, what elements grabbed, it suddenly made sense. The resulting app is a day planner with local storage, random quote API and Luxon for time and date. 
  </p>
  <a className="btn" href="https://vbalakhovsky.github.io/Day-Planner-in-JavaScript-with-Luxon/">Daily Planner</a>
  <br>
      </br>

      <p> From back-end to browser - Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
      </p>
      <a className="btn" href="https://limitless-springs-21035.herokuapp.com/">All this coding makes one hungry. Burger, anyone?</a>
      <br>
      </br>

      <p>  One of my first ventures in back-end development. This app allows user to create a team profile in Node. The user has the option to select the role of the new team member and add specifications unique to that role, after the profile is completed an html file is generated. The app relies on file system and inquirer NPM's.
      </p>
      <a className="btn" href="https://github.com/vbalakhovsky/Circus-Team-Profile-Generator">Let's build a team!</a>
      <br>
      </br>

          <p>  Hello Mysql! This app allows users to manage teams by listing various employee data in different tables, new employees, roles and departments can be created. The app uses node.js, inquirer and mysql database.
          </p>
          <a className="btn" href="https://github.com/vbalakhovsky/Employee-MGMT-System">Now that we can build a team, we can also manage it...</a>
          <br>
      </br>

           </div>
              
    </div>
    )
}

export default Apps
