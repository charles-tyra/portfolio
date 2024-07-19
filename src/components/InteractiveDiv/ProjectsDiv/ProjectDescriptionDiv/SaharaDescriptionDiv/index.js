import React from "react";
import './SaharaDescriptionDiv.css';

function SaharaDescriptionDiv() {
   return (
      <div id="project-description-div">
         <div id='project-description-top-row'>
            <div id='project-description-links-sahara'>
               <a href='https://sahara-nq7b.onrender.com'>live</a>
               <div className="vertical-line" />
               <a href='https://github.com/charles-tyra/sahara'>github repo</a>
            </div>
            <div id='sahara-line' />
         </div>

         {/* TIGHTEN UP */}
         <div id='sahara-description-box'>
            A faithful re-render of the Amazon e-commerce website with an “Animal Crossing” product theme. Replicating proprietary assets required reverse engineering spec details from the original codebase. A perfect example of the lengths I’m willing to go to achieve a specific look and feel for the frontend.
         </div>
      </div>
   )
}

export default SaharaDescriptionDiv;