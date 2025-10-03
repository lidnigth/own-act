/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
*/

import { useState } from "react";
import './App.css';
import logo from './logo.svg';

function App() {
  const [contador, setContador] = useState(0);
  const dataAtual = new Date().toLocaleDateString("pt-BR");

  return (
    <div className = "App" style={{ textAlign: "center", marginTop: "50px"}}>
      <h1>Primeiro React</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Data de hoje: {dataAtual}</p>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Clique para somar
      </button>
    </div>
  );
}

export default App;