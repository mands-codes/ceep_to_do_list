import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import "./style.css";

class ListaDeCategorias extends Component
{
    constructor(){
        super();
        this.state = {categorias:[]}
    }


    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias});
    }
    _handleEventoInput(e){
        if(e.key === "Enter"){
            let nomeCategoria = e.target.value;
            this.props.adicionarCategoria(nomeCategoria);
        }
    }
    render(){
        return(
            <section>
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index)=>{
                        return <li key={index} className="lista-categorias_item">{categoria}</li>
                    })}
                    
                </ul>
                <input type="text" 
                className="lista-categorias_input" 
                placeholder="Adicionar Categoria"
                onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;