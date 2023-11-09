import React, {useState} from "react";
import ResumeBox from "./ResumeBox";
import './Hoverable.css';

function Hoverable({iD, iMG, textBox}) {
   let [clicked, setClicked] = useState(false);

   const ClickedDiv = () => {
      console.log(iD === 'resume-div')
      if(iD === 'resume-div') {
         console.log('resume div')

         return (
            <ResumeBox />
         )
      } else {
         console.log('other div')

         return (
            <div className='hoverable'>
               test text
            </div>
         )
      }
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