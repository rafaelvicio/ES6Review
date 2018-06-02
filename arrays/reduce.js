//for
var numeros = [1, 2, 4, 5];
var soma = 0;

for (var i = 0; numeros.length; i++) {
    soma += numeros[i];
}

console.log('Somas: ', soma);

//reduce
var numeros = [1, 2, 4, 5];

var soma = 0;
soma = numeros.reduce(function(soma, numero) {
    return soma + numero;
}, 0)

console.log('Somas: ', soma);

//reduce
var alunos = [
    {nome: 'Rafael', idade: 21},
    {nome: 'Maria', idade: 18},
    {nome: 'Filype', idade: 17}
]

var nomes = alunos.reduce(function(arraysNomes, aluno){
    arraysNomes.push(aluno.nome);
    return arraysNomes;
}, []);

console.log('Nomes: ', arraysNomes);