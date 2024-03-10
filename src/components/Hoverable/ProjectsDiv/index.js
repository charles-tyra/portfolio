import React, { useEffect, useState } from "react";
import './ProjectsDiv.css';
import Hoverable from "..";

function ProjectsDiv() {
   let [project, setProject] = useState('TRIPIT');
   
   //need to set up a on click to show that the project info can then exist
   
   return (
      <>
         {project === 'TRIPIT'
            ?
            <>
                  <Hoverable iD={'trip-it-div'} textBox={'projects'} />
                  <Hoverable iD={'description-div'} textBox={'project-info'} project={project} />
                  <button id='testbutton' onClick={() => setProject('SAHARA')}>CLICKME</button>
               </>
            : 
               null
         }
         {project === 'SAHARA'
            ?
               <>
                  <Hoverable iD={'sahara-div'} textBox={'projects'} project={project} />
                  <Hoverable iD={'description-div'} textBox={'project-info'} />
                  <button id='testbutton' onClick={() => setProject('TRIPIT')}>CLICKME</button>
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