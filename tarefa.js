function Estúdio(nome, cargo, horasTrabalho, Salario){
    this.nome = nome;
    this.cargo = cargo;
    this.horasTrabalho = horasTrabalho;
    let _Salario = Salario;

    this.getSalario = function(){
        return _Salario;
    }
}

function Diretor(nome) {
    Estúdio.call(this, nome, "Diretor", 40, 10000);
}

function Produtor(nome){
    Estúdio.call(this, nome, "Produtor", 30, 8000);
}

function Ator(nome){
    Estúdio.call(this, nome, "Ator", 35, 9000);
}

const cast1 = new Ator("Marcos");
const cast2 = new Diretor ("Fernando");
const cast3 = new Produtor ("Maria");
const cast4 = new Ator ("Tamires");

console.log(cast1);
console.log(cast1.getSalario());

console.log(cast2);
console.log(cast2.getSalario());

console.log(cast3);
console.log(cast3.getSalario());

console.log(cast4);
console.log(cast4.getSalario());
