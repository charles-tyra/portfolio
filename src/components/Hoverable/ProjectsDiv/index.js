import React, { useState } from "react";
import './ProjectsDiv.css';
import Hoverable from "..";

import TripItDiv from './TripItDiv';
import SaharaDiv from './SaharaDiv';
import GrapeDiv from './GrapeDiv';

function ProjectsDiv() {
   let [project, setProject] = useState('TRIPIT');
   
   return (
      <>
         {project === 'TRIPIT'
            ?
               <>
                  <Hoverable iD={'trip-it-div'} textBox={'projects'} />
                  <Hoverable iD={'description-div'} textBox={'project-info'} />
               </>
            : 
               null
         }
         {project === 'SAHARA'
            ?
               <>
                  <Hoverable iD={'sahara-div'} textBox={'projects'} />
                  <Hoverable iD={'description-div'} textBox={'project-info'} />
               </>
            : 
               null
         }
         {/* {project === 'GRAPEPROSPERITY'
            ?
               <>
                  <Hoverable iD={'trip-it-div'} textBox={'projects'} />
                  <Hoverable iD={'description-div'} textBox={'project-info'} />
               </>
            : 
               null
         } */}
      </>
   )
}

export default ProjectsDiv;