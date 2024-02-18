import React, { useState } from "react";
import './ProjectsDiv.css';
import Hoverable from "../Hoverable";

import TripItDiv from './TripItDiv';
import SaharaDiv from './SaharaDiv';
import GrapeDiv from './GrapeDiv';

function ProjectsDiv() {
   let [project, setProject] = useState('TRIPIT');
   
   return (
      <>
         <Hoverable iD={'sahara-div'} textBox={'projects'} />
         <Hoverable iD={'trip-it-div'} textBox={'projects'} />
      </>
   )
}

export default ProjectsDiv;