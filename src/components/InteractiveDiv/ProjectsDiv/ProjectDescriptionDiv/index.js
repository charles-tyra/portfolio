import React from "react";
import './ProjectDescriptionDiv.css';

import SaharaDescriptionDiv from "./SaharaDescriptionDiv";
import TripItDescriptionDiv from "./TripItDescriptionDiv";

function ProjectDescriptionDiv({projectState}) {
   return (
      <div id="project-container">
         {projectState === 'TRIPIT'
            ? <TripItDescriptionDiv />
            : null 
         }

         {projectState === 'SAHARA'
            ?  <SaharaDescriptionDiv />
            : null 
         }
      </div>
   )
}

export default ProjectDescriptionDiv;