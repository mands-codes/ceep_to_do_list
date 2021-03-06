import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
import Categorias from "./dados/categorias";
import Notas from "./dados/notas";

class App extends Component {

  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new Notas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
        categorias={this.categorias}
        criarNota={this.notas.criarNota.bind(this.notas)} />
        <main className="conteudo-principal">

          <ListaDeCategorias 
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          categorias={this.categorias} />
          <ListaDeNotas 
            notas={this.notas.notas}
           apagarNota={this.notas.apagarNota.bind(this.notas)}
          />
       </main>
      </section>
     
    );
  }
}

export default App;