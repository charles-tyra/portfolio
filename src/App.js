import './App.css';

import Hoverable from './components/Hoverable';
import background from './assets/photo12.jpg'
import resumeImg from './assets/photo23.jpg';

function App() {
  
  return (
    <div id='totalframe'>
      <div id='body-container'>
        <div id='body'>
          <div id='background-container'>
            <img id='background-img' src={background} />
          </div>
          <div id='charles-tyra'>
            <div id='charles-tyra-links'>
              <a href='https://www.linkedin.com/in/charlesttyra-ny'>LinkedIn</a>
              <div className='vertical-line' />
              <a href='https://github.com/charles-tyra'>Github</a>
              <div className='vertical-line' />
              <a href="mailto:charlesttyra@gmail.com">Contact</a>
            </div>
            Charles Tyra
          </div>
          <Hoverable iD={'resume-div'} iMG={resumeImg} textBox={'resume'}/>
          {/* <Hoverable iD={'projects-div'} iMG ={resumeImg} textBox={'this'}/> */}
          <div id='philosphy'>
            This is my project philosophy
          </div>
        </div>
      </div>

      {/* PDF download link */}
      {/* <Document file={resume}/> */}
      {/* <a href='./assets/charlestyraresume.pdf' download='CharlesTyraResume'>Test download</a> */}
    </div>
  );
}

export default App;
