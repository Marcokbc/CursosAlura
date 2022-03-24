export default class Categorias{
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(func){//Passa a referencia para uma função
        this._inscritos.push(func);
    }

    desinscrever(func){
        console.log(this._inscritos.length)
        this._inscritos = this._inscritos.filter(f => f !== func);//Vai receber f como param e vai retornar todos que forem diferentes da função
        console.log(this._inscritos.length)
    }

    notificar(){
        this._inscritos.forEach(func =>{//Para cada inscrito que vai ser uma função vai se iterar sobre o array , executando cada uma das funções
            func(this.categorias);
        } );
    }
    
    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
    }
}