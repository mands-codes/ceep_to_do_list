import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: [],
      categorias:[],
    };
  }

  criarNota(titulo, texto, e){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoState = {
      notas: novoArrayNotas
    }
    this.setState(novoState);
    e.target.reset();
  }

  apagarNota(indice){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(indice,1);
    this.setState({notas:arrayNotas});
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = {...this.state, categorias:novoArrayCategorias};
    this.setState(novoEstado);
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">

          <ListaDeCategorias 
          adicionarCategoria={this.adicionarCategoria.bind(this)}
          categorias={this.state.categorias} />
          <ListaDeNotas 
          notas={this.state.notas}
           apagarNota={this.apagarNota.bind(this)}
          />
       </main>
      </section>
     
    );
  }
}

export default App;