import React, {useState} from "react";
import ResumeDiv from "./ResumeDiv";
import './Hoverable.css';
import PhilosophyDiv from "./PhilosophyDiv";

function Hoverable({iD, iMG, textBox}) {
   let [clicked, setClicked] = useState(false);

   return (
      <div id={iD} className="hoverable-container" onClick={() => setClicked(!clicked)}>
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