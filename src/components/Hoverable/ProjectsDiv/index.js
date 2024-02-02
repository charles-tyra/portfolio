import React, { useState } from "react";
import './ProjectsDiv.css';

import TripItDiv from './TripItDiv';
import SaharaDiv from './SaharaDiv';
import GrapeDiv from './GrapeDiv';

function ProjectsDiv() {
   let [project, setProject] = useState('TRIPIT');
   
   return (
      <>
         <SaharaDiv />
      </>
   )
}

export default ProjectsDiv;