import React, {useState} from "react";
import './Interactive.css';

import ResumeDiv from "./ResumeDiv";
import PhilosophyDiv from "./PhilosophyDiv";
import SaharaDiv from "./ProjectsDiv/SaharaDiv";
import TripItDiv from "./ProjectsDiv/TripItDiv";
import ProjectDescriptionDiv from "./ProjectsDiv/ProjectDescriptionDiv";

function Interactive({iD, textBox, project=null}) {
   let [clicked, setClicked] = useState(false);

   const changeDiv = () => {
      setClicked(!clicked);
   }

   // Think about setting an on hover. Possibly too busy.
   // Should I 'curry' this function? allow for pushing forward

   return (
      <div id={iD} className="interactive-container" onClick={changeDiv}>
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
         {clicked && iD === 'description-div'
            ?
               <ProjectDescriptionDiv projectState = {project} />
            :
               null
         }
         {!clicked
            ?
            <div className="interactive">
               { }
               </div>
            :
               null
         }
         {textBox && !clicked ? <div id={textBox} className="interactive-addedText">{textBox}</div> : null}
      </div>
   )
}

export default Interactive;