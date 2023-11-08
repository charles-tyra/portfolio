import './App.css';
import Hoverable from './components/Hoverable';
import background from './assets/photo12.jpg'

function App() {
  return (
    <div id='body-container'>
      <img id='backgroundimg' src={background} />
      <div id='body'>
        <Hoverable iD={'testBox'} img={'none'} />
        <Hoverable iD={'this'} img={'none'} />
      </div>
    </div>
  );
}

export default App;
