import React, {useState} from "react";
import './Hoverable.css';

import ResumeDiv from "./ResumeDiv";
import PhilosophyDiv from "./PhilosophyDiv";
import ProjectsDiv from "./ProjectsDiv";

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
         {clicked && iD === 'projects-div'
            ?
               <ProjectsDiv />
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