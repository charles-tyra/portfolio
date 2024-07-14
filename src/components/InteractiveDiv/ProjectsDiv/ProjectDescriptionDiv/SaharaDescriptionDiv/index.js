import React from "react";
import './SaharaDescriptionDiv.css';

function SaharaDescriptionDiv() {
   return (
      <div id="project-description-div">
         <div id='project-description-top-row'>
            <div id='project-description-links'>
               <a href='https://sahara-nq7b.onrender.com'>live</a>
               <div className="vertical-line" />
               <a href='https://github.com/charles-tyra/sahara'>github repo</a>
            </div>
            <div id='sahara-line' />
         </div>
         &emsp; Crafted a truly pixel-perfect Amazon clone including reverse engineering particular digital assets from the proprietary codebase to ensure a heavily accurate, detailed recreation of the early 2023 website.
         <br/>
         &emsp; Customized CSS selectors for dynamic and resizable website visuals to adhere to accessibility and user experience best practices.
         Utilized a Ruby on Rails backend paired with a React.js frontend in order to build a fully deployed full-stack website with AWS(S3) and PostgresQL bucket storage for full CRUD functionality across the app.
      </div>
   )
}

export default SaharaDescriptionDiv;