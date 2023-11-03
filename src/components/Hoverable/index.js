// useState for boolean change?
import React from "react";
import './Hoverable.css';

function Hoverable(iD, img) {
   let clicked = false;

   console.log(clicked);

   return (
      <div id='testId' onClick={() => clicked = !clicked}>
         {clicked ? 
            <div>UNCLICKED DIV</div>
            : <div className="testHoverable">CLICKED DIV</div>
         }
      </div>
   )
}

export default Hoverable;