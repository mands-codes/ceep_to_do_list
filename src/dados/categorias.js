export default class Categorias{
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(func){
        this._inscritos.push(func);
    }
    notificar(){
        this._inscritos.forEach(func => {
             func(this.categorias)
        });
    }

    desinscrever(func){
    //o filtro vai devolver todo mundo que nao tem essa funcao que vai ser retirada
        this._inscritos = this._inscritos.filter(f => f!==func);
    }
    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
    }
}