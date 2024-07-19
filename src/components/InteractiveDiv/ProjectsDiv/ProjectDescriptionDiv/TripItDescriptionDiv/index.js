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
         <div id='trip-it-description-box'>
            A travel-planning web app allowing users to make trip decisions asynchronously.
            I designed the bespoke “travel-themed” user interface (UI) playing on the idea of postcards with complete a webpage path outline.
            When finished, I headed reviewing and debugging code for the successful deployment of this collaborative project.
         </div>
      </div>
   )
}

export default TripItDescriptionDiv;