import React from "react";
import './ProjectDescriptionDiv.css';

function ProjectDescriptionDiv({projectState}) {

   return (
      <div>
         {true
            ?  <div>test statement</div>
            : null 
         }
      </div>
   )
}

export default ProjectDescriptionDiv;