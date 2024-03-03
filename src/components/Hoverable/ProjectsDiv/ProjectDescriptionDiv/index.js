import React from "react";
import './ProjectDescriptionDiv.css';

function ProjectDescriptionDiv({projectState}) {

   return (
      <div>
         {projectState === 'TRIPIT'
            ?  <div>test statement</div>
            : null 
         }
      </div>
   )
}

export default ProjectDescriptionDiv;