import React, { useState } from "react";
import './ProjectsDiv.css';

import tripIt from '../../../assets/tripItSplashPage.png';
import sahara from '../../../assets/sahara_screenshot.png';

function ProjectsDiv() {
   let [project, setProject] = useState('TRIPIT');
   
   return (
      <div id='project-container'>
         <img id='tripit-img' src={tripIt}/>
         {/* <br/>

         <a id='tripit-img-link' href="https://trip-it.onrender.com">
            Trip It
         </a> */}
      </div>
   )
}

export default ProjectsDiv;