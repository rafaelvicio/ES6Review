// for
var alunos = [
    {nome: 'Rafael', idade: 21},
    {nome: 'Maria', idade: 18},
    {nome: 'Filype', idade: 17}
];

var alunosDeMaior = [];

for(var i = 0; i < alunos.length; i++) {
    if(alunos[i].idade >= 18) {
        alunosDeMaior.push(alunos[i]);
    }
}

console.log('Alunos: ', alunos);
console.log('Alunos de Maior: alunos', alunosDeMaior);

// Filter
var alunos = [
    {nome: 'Rafael', idade: 21},
    {nome: 'Maria', idade: 18},
    {nome: 'Filype', idade: 17}
];

var alunosDeMaior = alunos.filter(function(aluno) {
    return aluno.idade >= 18;
})

console.log('Alunos: ', alunos);
console.log('Alunos de Maior: alunos', alunosDeMaior);