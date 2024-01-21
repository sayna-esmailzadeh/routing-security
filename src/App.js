// import logo from './logo.svg'
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [address, setAddress] = useState("")

  const onClicked = () => {
    axios.get(`https://api.ipify.org?format=json`)
      .then(res => {
        setAddress(res.data.ip)
      })
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <body><button onClick={() => onClicked()}>Get IP</button>
        <div>{`My IP Address is: ${address}`}</div></body>
    </div>
  );
}

export default App;
