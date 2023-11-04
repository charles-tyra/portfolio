import React, {useState} from "react";
import './Hoverable.css';

function Hoverable({iD, iMG}) {
   let [clicked, setClicked] = useState(false);

   return (
      <div id={iD} className="hoverable" onClick={() => setClicked(!clicked)}>
         {clicked
            ? <div>xxx</div>
            : <div class="testHoverable">CLICKED DIV</div>
         }
      </div>
   )
}

export default Hoverable;