import React, {useState} from "react";
import ResumeBox from "./ResumeBox";
import './Hoverable.css';

function Hoverable({iD, iMG, textBox}) {
   let [clicked, setClicked] = useState(false);

   const ClickedDiv = () => {
      let ResumeOrDiv = null;

      if(iD === 'resume-div') {
         ResumeOrDiv = <ResumeBox />;
      } else {
         ResumeOrDiv = 
         <div className='hoverable'>
            test text
         </div>;
         
      }

      return (
         ResumeOrDiv
      )
   }

   return (
      <div id={iD} className="hoverable-container" onClick={() => setClicked(!clicked)}>
         {clicked
            ? 
               <ClickedDiv />
            : 
            <div className="hoverable">
               <img src={iMG} className="hoverable-img" />
            </div>
         }
         {/* { clicked && iD === 'resume-div'
            ?
            <div className='hoverable'>
               <img src={iMG} className="hoverable-img" />
            </div>
            : <ResumeBox />
         } */}
         {textBox && clicked ? null : <div id={textBox} className="hoverable-addedText">{textBox}</div>}
      </div>
   )
}

export default Hoverable;