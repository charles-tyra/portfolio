import React from "react";
import './ProjectDescriptionDiv.css';

function ProjectDescriptionDiv({projectState}) {

   return (
      <div>
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

         {projectState === 'TRIPIT'
            ?  <div>test statement</div>
            : null 
         }
      </div>
   )
}

export default ProjectDescriptionDiv;