import './App.css';
import Ball from './ball/ball'

function App() {
  return (
    <div className="App">
      <div className="input">
        <span>Imaginate or input your question:</span>
        <input type="text" id="yours"/>
      </div>
      <div className="do">
        Hold the ball
      </div>
      <Ball />
    </div>
  );
}

export default App;
