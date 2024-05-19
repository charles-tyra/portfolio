import './App.css';

import Interactive from './components/InteractiveDiv';

import background from './assets/photo12.jpg';
import linksImg from './assets/photo5.jpg';
import philosophyImg from './assets/photo6.jpg';
import resumeImg from './assets/photo23.jpg';
import projectsImg from './assets/photo27.jpg';
import ProjectsDiv from './components/InteractiveDiv/ProjectsDiv';

// Unused - check later for possible resume use.
// import linesUnused from './assets/photo17.jpg';
// import fuzzyUnused from './assets/photo7.jpg';

// Vacation / set-up
function App() {
  
  //Change RESUME
  const backgroundImageObject = {
    DEFAULT: background,
    RESUME: resumeImg,
    LINKS: linksImg,
    PROJECTS: projectsImg,
    PHILOSOPHY: philosophyImg
  };

  const currentBackground = backgroundImageObject.DEFAULT;
  
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

          <Interactive iD={'resume-div'} textBox={'resume'}/> {/*corresponding image: iMG={resumeImg} */}
          <Interactive iD={'philosophy-div'} textBox={'philosophy'} />

          <ProjectsDiv />
        </div>
      </div>

      {/* PDF download link */}
      {/* <Document file={resume}/> */}
      <a iD='pdfDownload' href='src/assets/charlestyraresume.pdf' download='charlestyraresume.pdf'>Test download</a>
    </div>
  );
}

export default App;
