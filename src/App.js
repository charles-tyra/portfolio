import './App.css';
import Hoverable from './components/Hoverable';
import background from './assets/photo12.jpg'
import { PDFDownloadLink } from '@react-pdf/renderer';
import resume from './assets/charlestyraresume.pdf'

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
      <iframe src={resume} width='100%' height='500px'/>
      <PDFDownloadLink> 

      </PDFDownloadLink>
      {/* <a href='./assets/charlestyraresume.pdf' download='CharlesTyraResume'>Test download</a> */}
    </div>
  );
}

export default App;
