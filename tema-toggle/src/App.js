import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Modo {darkMode ? "Escuro" : "Claro"}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>Alternar tema</button>
    </div>
  );
}

export default App;
