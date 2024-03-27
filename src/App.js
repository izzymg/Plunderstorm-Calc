import './App.css';
import CalculatorView from './CalculatorView/CalculatorView';
import Me from './Me/Me';

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>YARR <span className='bigtext'>Plunder</span> calculator 🦜🏴‍☠️☠️</h1>
        <CalculatorView></CalculatorView>
        <Me></Me>
      </div>
    </div>
  );
}

export default App;
