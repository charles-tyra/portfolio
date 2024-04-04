import React from "react";
import './ProjectDescriptionDiv.css';

function ProjectDescriptionDiv({projectState}) {

   //Change formatting of the words - have descriptions that match the vibes + links.

   return (
      <div id="project-container">
         {projectState === 'TRIPIT'
            ?  <div>
                  MERN app where friends can collaborate to create, plan, 
                  and make decisions about group travel
               </div>
            : null 
         }

         {projectState === 'SAHARA'
            ?  <div>
                  Fullstack Amazon clone where people can create a user account,
                  search and review products, add them to cart and purchase them
               </div>
            : null 
         }
      </div>
   )
}

export default ProjectDescriptionDiv;