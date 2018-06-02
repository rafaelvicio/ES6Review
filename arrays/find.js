// for
var alunos = [
    {nome: 'Rafael', idade: 21},
    {nome: 'Maria', idade: 18},
    {nome: 'Filype', idade: 17}
];

var aluno;
for(var i = 0; i < alunos.length; i++) {
    if(alunos[i].nome === 'Rafael') {
        aluno = alunos[i];
        break;
    }
}

console.log('Aluno: ', aluno);

//find
var alunos = [
    {nome: 'Rafael', idade: 21},
    {nome: 'Maria', idade: 18},
    {nome: 'Filype', idade: 17}
];

var aluno = alunos.find(function(aluno) {
    return aluno.nome === 'Rafael';
})

console.log('Aluno: ', aluno);