class Livro {
    constructor(pNome, pPreço){
        this.Nome = pNome;
        this.Preço = pPreço;
    }

    get Nome() {return this.Nome;}
    set Nome (pNome) {this.nome = pNome;}

    get Preço() {return this.Preço;}
    set Preço (pPreço) {this.preço = pPreço;}

}
var obj_livro1 = new Livro ("use a cabeça Java",120);
var obj_livro2 = new Livro ("use a cabeça C#",190);

var lista = [];
lista.push(obj_livro1);
lista.push(obj_livro2);

console.log(lista[0]);
console.log(lista[1]);

