import './App.css';
import { useState } from 'react';

import Interactive from './components/InteractiveDiv';
import ProjectsDiv from './components/InteractiveDiv/ProjectsDiv';
import resume from './assets/charlestyraresume.pdf';

import background from './assets/photo12.jpg';

// import resumeImg from './assets/photo23.jpg';
// import linksImg from './assets/photo5.jpg';
// import philosophyImg from './assets/photo6.jpg';
// import projectsImg from './assets/photo27.jpg';

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

  //Change RESUME - use to check
  // const backgroundImageObject = {
  //   DEFAULT: background,
  //   RESUME: resumeImg,
  //   LINKS: linksImg,
  //   PROJECTS: projectsImg,
  //   PHILOSOPHY: philosophyImg
  // };

  const currentBackground = background;

  // Set up a switch with Interactive Divs - general check if anything is clicked 
  //      Will it be available for only a single clicked at a time -- check
  
  return (
    <div id='totalframe'>
      <div id='body-container'>
        <div id='body'>
          <div id='background-container'>
            <img id='background-img' src={currentBackground} />
          </div>

          {/* Setting up background color for transparent link area */}
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
              {/* <img id='links-img' src={linksImg}/> */}
              <a href='https://www.linkedin.com/in/charlesttyra-ny'>linkedIn</a>
              <div className='vertical-line' />
              <a href='https://github.com/charles-tyra'>github</a>
              <div className='vertical-line' />
              <a href="mailto:charlesttyra@gmail.com">contact</a>
            </div>
            Charles Tyra
          </div>

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
