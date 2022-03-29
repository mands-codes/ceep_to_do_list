export default class Notas{


    constructor()
    {
        this.notas = [];
        this._inscritos = [];
 }
 inscrever(func){
    this._inscritos.push(func);
}
 notificar(){
     this._inscritos.forEach(func => {
             func(this.notas)
        });
 }
 desinscrever(func){
    //o filtro vai devolver todo mundo que nao tem essa funcao que vai ser retirada
        this._inscritos = this._inscritos.filter(f => f!==func);
    }
criarNota(titulo, texto, categoria){
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push = novaNota;
    this.notificar();
}

apagarNotas(indice){
    this.notas.splice(indice, 1);
    this.notificar();
}
}

class Nota{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}