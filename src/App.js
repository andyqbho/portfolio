import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test <code>src/App.js</code> and save to reload.<br></br>
          I added this test line.<br></br>
          And this one
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I am Andy
        </a>
      </header>
    </div>
  );
}

export default App;
