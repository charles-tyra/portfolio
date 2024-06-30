import React, { useState } from "react";
import './ProjectsDiv.css';

import Interactive from "..";

function ProjectsDiv() {
   let [project, setProject] = useState('SAHARA');
   let [showProjectInfo, setShowProjectInfo] = useState(false);
   let [clicked, setClicked] = useState(false);

   // Handle clicks to reset states as you move from project to project
   let handleSetSahara = () => {
      setProject('SAHARA');
      setClicked(false);
      setShowProjectInfo(false);
   };
   let handleSetTripIt = () => {
      setProject('TRIPIT');
      setClicked(false);
      setShowProjectInfo(false);
   }
   

   return (
      <>
         {project === 'SAHARA'
            ?
               <>
                  <Interactive iD={'sahara-div'} textBox={'project-sahara'} project={project} clickedState={clicked} setClickedState={setClicked} />
                  {clicked ? <div id="more-info-sahara" onClick={() => setShowProjectInfo(!showProjectInfo)}>more<br />-<br />info</div> : null}
                  {showProjectInfo ? <Interactive iD={'description-div'} textBox={'project-info'} project={project} /> : null}
                  <button id='sahara-right-button' className='on-click-button' onClick={handleSetTripIt}> {'>'}</button>
               </>
            : 
               null
         }
         {project === 'TRIPIT'
            ?
               <>
                  <Interactive iD={'trip-it-div'} textBox={'project-trip-it'} clickedState={clicked} setClickedState={setClicked} />
                  {clicked ? <div id="more-info-trip-it" onClick={() => setShowProjectInfo(!showProjectInfo)}>more<br/>-<br/>info</div> : null}
                  {showProjectInfo ? <Interactive iD={'description-div'} textBox={'project-info'} project={project} /> : null}
                  <button id='tripit-left-button' className='on-click-button' onClick={handleSetSahara}> {'<'} </button>
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