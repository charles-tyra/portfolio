import './App.css';
import Hoverable from './components/Hoverable';

function App() {
  return (
    <div id='body-container'>
      <div id='body'>
        <Hoverable iD={'testBox'} img={'none'} />
        <Hoverable iD={'this'} img={'none'} />
      </div>
    </div>
  );
}

export default App;
