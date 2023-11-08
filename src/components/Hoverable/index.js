import React, {useState} from "react";
import './Hoverable.css';

function Hoverable({iD, iMG, textBox}) {
   let [clicked, setClicked] = useState(false);

   return (
      <div id={iD} className="hoverable-container" onClick={() => setClicked(!clicked)}>
         {clicked
            ? 
            <div className='hoverable'>
               <img src={iMG} className="hoverable-img" />
            </div>
            : <div class="hoverable">CLICKED DIV</div>
         }
         {textBox ? <div id={textBox} className="hoverable-addedText">{textBox}</div> : null}
      </div>
   )
}

export default Hoverable;