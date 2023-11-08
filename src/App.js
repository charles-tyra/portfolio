import './App.css';
import { Document, Page, pdfjs } from 'react-pdf';

import Hoverable from './components/Hoverable';
import background from './assets/photo12.jpg'
import resume from './assets/charlestyraresume.pdf'
import resumeImg from './assets/photo23.jpg';

function App() {
  
  return (
    <div id='totalframe'>
      <div id='body-container'>
        <div id='body'>
          <img id='background-img' src={background} />
          <Hoverable iD={'resume-div'} iMG={resumeImg} textBox={'resume'}/>
        </div>
      </div>

      {/* PDF download link */}
      {/* <Document file={resume}/> */}
      {/* <a href='./assets/charlestyraresume.pdf' download='CharlesTyraResume'>Test download</a> */}
    </div>
  );
}

export default App;
