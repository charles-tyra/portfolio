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
         &emsp; Fullstack Amazon clone where people can create a user account, search and review products, add them to cart, and purchase them
         Leveraged Rails backend validations to ensure user’s privacy, providing in-depth error handling for both sign-up and sign-in functionality.
         Developed backend search functionality, implementing Active Record to filter a string pulled from Frontend Input resulting in a faster, more specific query to the database.
         Created AWS S3 Buckets to store images, and PostgreSQL to store products and user data improving the speed and future scalability of the project.
         Maximized advanced CSS selectors to refactor an outdated component and successfully replicate Amazon’s style pixel-perfectly.
      </div>
   )
}

export default SaharaDescriptionDiv;