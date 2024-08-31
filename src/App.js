import './App.css';
import { useState } from 'react';

import Interactive from './components/InteractiveDiv';
import ProjectsDiv from './components/InteractiveDiv/ProjectsDiv';
import resume from './assets/charlestyraresume.pdf';

import background from './assets/photo12.jpg';

// HAPPY
// BIRTHDAY
// MOLLY
// MACGILBERT

function App() {
  let [clickedResume, setClickedResume] = useState(false); 

  // Resume Download link.
  const DownloadPDFButton = () => (
    <div id='resume-download-button'>
      <a href={resume} download="charles_tyra_resume" target='_blank'>
        click-to-download
      </a>
    </div>
  )
  
  return (
    <div id='totalframe'>
      <div id='body-container'>
        <div id='body'>
          <div id='background-container'>
            <img id='background-img' src={background} />
          </div>

          {/* Setting up white background to continue for transparent link area */}
          <div id='ct-background-left' />
          <div id='ct-background-top' />
          <div id='ct-background-right' />
          <div id='ct-background-bottom' />

          <div id='statement-container'>
            <div id='statement'>
              This portfolio is an exercise in restrictive design on a 64x36 grid.
            </div>
          </div>

          <div id='charles-tyra'>
            <div id='charles-tyra-links'>
              <a href='https://www.linkedin.com/in/charlesttyra-ny'>linkedIn</a>
              <div className='vertical-line' />
              <a href='https://github.com/charles-tyra'>github</a>
              <div className='vertical-line' />
              <a href="mailto:charlesttyra@gmail.com">contact</a>
            </div>
            charlesTyra
          </div>

          {/* Set up for resume */}
          <Interactive iD={'resume-div'} textBox={'resume'} project={resume} clickedState={clickedResume} setClickedState={setClickedResume}/>
          {clickedResume ? <DownloadPDFButton /> : null}
          <Interactive iD={'philosophy-div'} textBox={'philosophy'} />

          <ProjectsDiv />
        </div>
      </div>
    </div>
  );
}

export default App;
