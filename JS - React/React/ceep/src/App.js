import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  constructor(){
    super();

    this.state = {
      notas:[]
    }
  }
  
  //Precisa disso aqui pois a lista de notas precisa saber de algo que o formulario fez
  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas});
  }

  render() {
    return (
      <section className="conteudo">
         <FormularioCadastro criarNota={this.criarNota.bind(this)}/> { /*  Quando for criarNota propriedade, chama o this.criarNota */}
        <ListaDeNotas 
        apagarNota={this.deletarNota.bind(this)}
        notas={this.state.notas}/>
      </section>
    );
  }
}
//new ListaDeNotas({notas:this.notas})
export default App;
