const estudantes = [];
const alunos = estudantes.map(function(nome, nota){
    itemAtual= {
        nome: nome,
        nota: nota,
    }
    return itemAtual;
})

alunos.push({nome:'Lucio', nota: '5'});
alunos.push({nome:'Ana', nota: '8'});
alunos.push({nome:'João', nota: '10'});
alunos.push({nome:'Renata', nota: '2'});
alunos.push({nome:'Ulisses', nota: '4'});

const alunosAprovados = alunos.filter(function(item){
    return (item.nota >= '6');
})
console.log(alunosAprovados)

// console.log(alunos)
