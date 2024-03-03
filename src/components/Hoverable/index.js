import React, {useState} from "react";
import './Hoverable.css';

import ResumeDiv from "./ResumeDiv";
import PhilosophyDiv from "./PhilosophyDiv";
import ProjectsDiv from "./ProjectsDiv";
import SaharaDiv from "./ProjectsDiv/SaharaDiv";
import TripItDiv from "./ProjectsDiv/TripItDiv";
import ProjectDesccriptionDiv from "./ProjectsDiv/ProjectDescriptionDiv";

function Hoverable({iD, iMG, textBox}) {
   let [clicked, setClicked] = useState(false);

   const changeDiv = () => {
      setClicked(!clicked);
   }

   return (
      <div id={iD} className="hoverable-container" onClick={changeDiv}>
         {clicked && iD === 'resume-div'
            ? 
               <ResumeDiv />
            : 
               null
         }
         {clicked && iD === 'philosophy-div'
            ?
               <PhilosophyDiv />
            :
               null
         }
         {clicked && iD === 'sahara-div'
            ?
               <SaharaDiv />
            :
               null
         }
         {clicked && iD === 'trip-it-div'
            ?
               <TripItDiv />
            :
               null
         }
         {clicked && iD === 'projects-div'
            ?
               <SaharaDiv />
            :
               null
         }
         {clicked && iD === 'description-div'
            ?
               <ProjectDesccriptionDiv />
            :
               null
         }
         {!clicked
            ?
               <div className="hoverable">
                  {/* <img src={iMG} className="hoverable-img" /> */}
               </div>
            :
               null
         }
         {textBox && !clicked ? <div id={textBox} className="hoverable-addedText">{textBox}</div> : null}
      </div>
   )
}

export default Hoverable;