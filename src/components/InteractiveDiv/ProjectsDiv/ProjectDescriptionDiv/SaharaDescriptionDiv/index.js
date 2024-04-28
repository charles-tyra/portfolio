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

         Fullstack Amazon clone where people can create a user account,
         search and review products, add them to cart and purchase them
      </div>
   )
}

export default SaharaDescriptionDiv;