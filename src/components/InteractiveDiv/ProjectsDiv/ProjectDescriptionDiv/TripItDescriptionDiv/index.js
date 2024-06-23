import React from "react";
import './TripItDescriptionDiv.css';

function TripItDescriptionDiv() {
   return (
      <div id="project-description-div">
         <div id='project-description-top-row'>
            <div id='project-description-links'>
               <a href='https://trip-it.onrender.com'>live</a>
               <div className="vertical-line" />
               <a href='https://github.com/ShawnaEHartley/trip-it'>github repo</a>
            </div>
            <div id='trip-it-line' />
         </div>
         &emsp; MERN app where friends can collaborate to create, plan, and make decisions about group travel.
         Implemented Agile methodology through daily standups to discuss task updates and roadblocks to create an efficient workflow and communication between frontend and backend team.
         Outlined and architected the web application as the Frontend Lead, using modular React components - ensured consistency in design and eliminated prop drilling and coupling.
         Designed the document layout using a non-relational database (MongoDB) to persist user’s trips and events, minimizing unnecessary queries to the database.
      </div>
   )
}

export default TripItDescriptionDiv;