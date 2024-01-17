import React from "react";
import './SaharaDiv.css';

import sahara from '../../../../assets/sahara_screenshot.png';

function SaharaDiv() {
   return (
      <div id='project-container'>
         <img id='sahara-img' src={sahara} />
         {/* <br/>

         <a id='tripit-img-link' href="https://trip-it.onrender.com">
            Trip It
         </a> */}
      </div>
   )
}

export default SaharaDiv;