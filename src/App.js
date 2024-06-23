import './App.css';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { PDFDownloadLink } from '@react-pdf/renderer';

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

  // Possible bugs
      // giving link to address of pdf
      // doesn't contain any info from pages / just general PDF?
      // 'it may be damaged', preview doesn't pick it up. only 779 bytes

  // Resume Download link.
  const DownloadDoc = () => (
    <Document file={resume}>
    </Document>
  )

  const DownloadResumeButton = () => (
    <div id='resume-download-button'>
      <PDFDownloadLink document={<DownloadDoc />} fileName="charlestyraresume.pdf">
        {({ blob, url, loading, error }) => (loading ? 'truthfully loading..' : 'click-to-download')}
      </PDFDownloadLink>
    </div >
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

  
  return (
    <div id='totalframe'>
      <div id='body-container'>
        <div id='body'>
          {/* Set up a switch with Interactive Divs - general check if anything is clicked 
              Will it be available for only a single clicked at a time -- check */}
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
          {clickedResume ? <DownloadResumeButton /> : null}
          <Interactive iD={'philosophy-div'} textBox={'philosophy'} />

          <ProjectsDiv />
        </div>
      </div>
    </div>
  );
}

export default App;
