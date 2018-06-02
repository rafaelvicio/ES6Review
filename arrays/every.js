// for
var alunos = [
    {nome: 'Rafael', idade: 21},
    {nome: 'Maria', idade: 18},
    {nome: 'Filype', idade: 17}
];

var todosAlunosMaiores = true;
for(var i = 0; i < alunos.length; i++) {
    if(alunos[i].idade < 18) {
        todosAlunosMaiores = false;
        break;
    }
}

console.log('Todos maiores de idade: ', todosAlunosMaiores);

//every
var alunos = [
    {nome: 'Rafael', idade: 21},
    {nome: 'Maria', idade: 18},
    {nome: 'Filype', idade: 17}
];

var todosAlunosMaiores = alunos.every(function(aluno) {
    return aluno.idade >= 18;
})

console.log('Todos maiores de idade: ', todosAlunosMaiores);