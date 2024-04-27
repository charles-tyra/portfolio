import React from "react";
import './ProjectDescriptionDiv.css';

function ProjectDescriptionDiv({projectState}) {

   //Change formatting of the words - have descriptions that match the vibes + links.

   return (
      <div id="project-container">
         {projectState === 'TRIPIT'
            ?  <div id="project-description-div">
                  
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra sapien ac euismod hendrerit. Donec vitae nisi id nunc convallis efficitur et eu lorem. Nunc vehicula maximus est eget laoreet. Quisque id libero et nibh ornare feugiat. Integer sit amet velit vitae risus facilisis semper in tempus turpis. Aenean sollicitudin interdum elementum. Etiam interdum congue augue, sed dignissim purus mattis vel. Suspendisse est lacus, imperdiet at diam ut, egestas congue nibh. Proin pellentesque a nulla vel iaculis. Aenean sit amet quam erat. Nulla viverra finibus ante, sit amet mollis quam semper ac. Mauris non nisl laoreet, sodales est sed, finibus ipsum.
               </div>
            : null 
         }

         {projectState === 'SAHARA'
            ?  <div id="project-description-div">
                  <div id='project-description-top-row'>
                     <div id='project-description-links'>
                        <a href='https://sahara-nq7b.onrender.com'>live</a>
                        <div className="vertical-line"/>
                        <a href='https://github.com/charles-tyra/sahara'>github repo</a>
                     </div>
                     <div id='sahara-line'/>
                  </div>

                  Fullstack Amazon clone where people can create a user account,
                  search and review products, add them to cart and purchase them
               </div>
            : null 
         }
      </div>
   )
}

export default ProjectDescriptionDiv;