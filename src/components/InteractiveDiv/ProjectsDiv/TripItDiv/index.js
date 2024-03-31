import React from "react";
import './TripItDiv.css';

import tripIt from '../../../../assets/tripItSplashPage.png';

function TripItDiv() {
   
   return (
      <>
         <div id='project-container'>
            <img id='tripit-img' src={tripIt} />
         </div>
      </>
   )
}

export default TripItDiv;

//To place elsewhere
// /* <br/>

//    <a id='tripit-img-link' href="https://trip-it.onrender.com">
//    Trip It
//    </a> */