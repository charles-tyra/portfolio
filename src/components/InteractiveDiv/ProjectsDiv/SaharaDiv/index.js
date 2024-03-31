import React from "react";
import './SaharaDiv.css';

import sahara from '../../../../assets/sahara_screenshot.png';

function SaharaDiv() {
   return (
      <>
         <div id='project-container'>
            <img id='sahara-img' src={sahara} />
         </div>
      </>
   )
}

export default SaharaDiv;