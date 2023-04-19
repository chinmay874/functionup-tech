import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Benifits of using reacts...</h1>
        <p>
          1. Component-based architecture<br />
          2. Virtual Dom for efficient updates <br />
          3. Rich ecosystem and community <br />
          4. Cross-platform development <br />
          5. Strong community support <br />
        </p>
        <button>Get Started...</button>
      </header>
    </div>
  );
}

export default App;
