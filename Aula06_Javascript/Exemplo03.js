class Livro {
    constructor(pNome, pPreço) {
        this.Nome = pNome;
        this.Preço = pPreço;
    }

    get Nome() {return this.Nome;}
    set Nome (pNome) {this.nome = pNome;}

    get Preço() {return this.Preço;}
    set Preço (pPreço) {this.preço = pPreço;}
}

var obj_livro1 = new Livro ("use a cabeça Java",100);
console.log("Nome do Livro: " + obj_livro1.nome + " custa R$ " + obj_livro1.preço+ " Reais ");
