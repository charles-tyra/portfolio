import React, { useEffect, useState } from "react";
import './ProjectsDiv.css';

import Interactive from "..";

function ProjectsDiv() {
   let [project, setProject] = useState('SAHARA');
   let [showProjectInfo, setShowProjectInfo] = useState(false);
   let [clicked, setClicked] = useState(false);
   
   //Is there a way to have a 'show extra' button for Interactive - possible
   
   return (
      <>
         {project === 'TRIPIT'
            ?
               <>
                  <Interactive iD={'trip-it-div'} textBox={'project-trip-it'} clickedState={clicked} setClickedState={setClicked} />
                  {showProjectInfo ? <Interactive iD={'description-div'} textBox={'project-info'} project={project} /> : null}
                  <button id='tripit-left-button' className='on-click-button' onClick={() => setProject('SAHARA')}> {'<'} </button>
               </>
            : 
               null
         }
         {project === 'SAHARA'
            ?
               <>
               <Interactive iD={'sahara-div'} textBox={'project-sahara'} project={project} clickedState={clicked} setClickedState={setClicked} />
                  {showProjectInfo ? <Interactive iD={'description-div'} textBox={'project-info'} project={project} /> : null}
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