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
        <img id='backgroundimg' src={background} />
        <div id='body'>
          <Hoverable iD={'testBox'} iMG={resumeImg} textBox={'true'}/>
        </div>
      </div>

      {/* PDF download link */}
      {/* <Document file={resume}/> */}
      {/* <a href='./assets/charlestyraresume.pdf' download='CharlesTyraResume'>Test download</a> */}
    </div>
  );
}

export default App;
