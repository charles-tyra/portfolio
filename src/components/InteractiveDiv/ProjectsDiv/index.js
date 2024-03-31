import React, { useEffect, useState } from "react";
import './ProjectsDiv.css';
import Interactive from "..";

function ProjectsDiv() {
   let [project, setProject] = useState('TRIPIT');
   
   //need to set up a on click to show that the project info can then exist
   
   return (
      <>
         {project === 'TRIPIT'
            ?
            <>
                  <Interactive iD={'trip-it-div'} textBox={'projects'} />
                  <Interactive iD={'description-div'} textBox={'project-info'} project={project} />
                  <button id='tripit-left-button' className='on-click-button' onClick={() => setProject('SAHARA')}> {'<'} </button>
               </>
            : 
               null
         }
         {project === 'SAHARA'
            ?
               <>
                  <Interactive iD={'sahara-div'} textBox={'projects'} project={project} />
                  <Interactive iD={'description-div'} textBox={'project-info'} />
                  <button id='sahara-right-button' className='on-click-button' onClick={() => setProject('TRIPIT')}> {'>'}</button>
               </>
            : 
               null
         }
         {/* {project === 'GRAPEPROSPERITY'
            ?
               <>
                  <Interactive iD={'trip-it-div'} textBox={'projects'} />
                  <Interactive iD={'description-div'} textBox={'project-info'} />
               </>
            : 
               null
         } */}
      </>
   )
}

export default ProjectsDiv;