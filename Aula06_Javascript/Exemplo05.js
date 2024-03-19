class Livro {
    constructor(pNome, pPreço){
        this.Nome = pNome;
        this.Preço = pPreço;
    }

    get Nome() {return this.Nome;}
    set Nome (pNome) {this.nome = pNome;}

    get Preço() {return this.Preço;}
    set Preço (pPreço) {this.preço = pPreço;}

    calcularDesconto(pDesconto){
        this.preço = this.preço - pDesconto;
        
    }
}

var obj_livro1 = new Livro ("use a cabeça Java",120);
obj_livro1.calcularDesconto(30);
console.log("Nome do Livro: " + obj_livro1.nome  + " custa R$ " + obj_livro1.preço+ " Reais ");
