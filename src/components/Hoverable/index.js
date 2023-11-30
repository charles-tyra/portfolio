import React, {useState} from "react";
import ResumeBox from "./ResumeBox";
import './Hoverable.css';

function Hoverable({iD, iMG, textBox}) {
   let [clicked, setClicked] = useState(false);

   // const ClickedDiv = () => {
   //    let ResumeOrDiv = null;

   //    if(iD === 'resume-div') {
   //       ResumeOrDiv = <ResumeBox />;
   //    } else {
   //       ResumeOrDiv = 
   //       <div className='hoverable'>
   //          <img src={iMG} className="hoverable-img"/>
   //       </div>;
   //    }

   //    return (
   //       ResumeOrDiv
   //    )
   // }

   return (
      <div id={iD} className="hoverable-container" onClick={() => setClicked(!clicked)}>
         {clicked && iD === 'resume-div'
            ? 
               <ResumeBox />
            : 
               null
         }
         {!clicked
            ?
               <div className="hoverable">
                  <img src={iMG} className="hoverable-img" />
               </div>
            :
               null
         }
         {textBox && !clicked ? <div id={textBox} className="hoverable-addedText">{textBox}</div> : null}
      </div>
   )
}

export default Hoverable;