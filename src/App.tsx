import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let nome = "Silvio";
  let classTitulo = "titulo-vermelho";
  let titulo = <h1>Oi</h1>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá mundo! Eu sou {2 + 2}!
        </p>
        <a
          className={classTitulo}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {titulo}
        </a>
      </header>
    </div>
  );
}

export default App;
