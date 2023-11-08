import './App.css';
import Hoverable from './components/Hoverable';
import background from './assets/photo12.jpg'
import { Document, Page, pdfjs, W } from 'react-pdf';
import resume from './assets/charlestyraresume.pdf'
import { useEffect } from 'react';

function App() {
  
  return (
    <div id='totalframe'>
      <div id='body-container'>
        <img id='backgroundimg' src={background} />
        <div id='body'>
          <Hoverable iD={'testBox'} img={'none'} />
          <Hoverable iD={'this'} img={'none'} />
        </div>
      </div>

      {/* PDF download link */}
      {/* <Document file={resume}/> */}
      {/* <a href='./assets/charlestyraresume.pdf' download='CharlesTyraResume'>Test download</a> */}
    </div>
  );
}

export default App;
