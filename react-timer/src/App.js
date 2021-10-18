import logo from './logo.svg';
import './App.css';
import Timer from './timer/component'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer name='wake up'/>
      </header>
    </div>
  );
}

export default App;
