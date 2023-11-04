import React, {useState} from "react";
import './Hoverable.css';

function Hoverable(iD, iMG) {
   let [clicked, setClicked] = useState(false);

   return (
      <div id='testId' onClick={() => setClicked(!clicked)}>
         {clicked ? 
            <div>UNCLICKED DIV</div>
            : <div className="testHoverable">CLICKED DIV</div>
         }
      </div>
   )
}

export default Hoverable;