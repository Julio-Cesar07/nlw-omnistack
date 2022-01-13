// JSX (JavaScriptml e XML)

// import React, { useState } from 'react';

import React from 'react';
import './global.css'
//import Header from './Header'
import Routes from './routes';

/* function App() {
  const [counter, setCounter] = useState(0);

  // Array useState[valor, funcaoDeAtualizacao]

  function increment() {
    setCounter(counter + 5)
  }

  return (
    <div>
      <Header title="Semana Omnistack"/>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementos</button>
    </div>
  );
} */

function App() {
  return (
    <Routes />
  );
}

export default App
