import React, { Component } from "react";
import FormularioCalculo from "./components/FormularioCalculo";
import "./assets/App.css";
class App extends Component {

  render() {
    return (
      <div className="body">
        <header className="hdr">
          <a href="/" className="hdr-item">Calculadora Salário Líquido</a>
        </header>
        <FormularioCalculo/>
        <footer className="ftr"></footer>
      </div>
    );
  }
}

export default App;
