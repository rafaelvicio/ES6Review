// Utilizando For
var nomes = ['Rafael', 'Maria', 'Filype'];
for(var i = 0; i <nomes.length; i++){
    console.log(nomes[i]);
}

//ForEach com função anonima
var nomes= ['Rafael', 'Maria', 'Filype'];
nomes.forEach(function(nome) {
    console.log(nome);
})

//ForEach com função delcarada
var nomes = ['Rafael', 'Maria', 'Filype'];
nomes.forEach(imprimirNome);

function imprimirNome(nome){
    console.log(nome);
}

var nomes = ['Rafael', 'Maria', 'Filype'];
nomes.forEach(imprimeAltera);

function imprimeAltera(nome){
    nomes.push('Alo'); // Não e possivel alterar o array depois
    nome = nome + '1';
    console.log(nome);
}