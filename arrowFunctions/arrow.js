var boasVindas = function(nome) {
    return "Seja bem-vindo, " + nome;
}

boasVindas('Rafael');

var boasVindas = (nome) => {
    return "Seja bem-vindo, " + nome;
}

boasVindas('Rafael');

//As simples podem emitir o parentese
var boasVindas = nome => {
    return 'Seja bem-vindo, ' + nome;
}

boasVindas('Rafael');

//As simples podem emitir as chaves
var boasVindas = nome => 'Seja bem-vindo, ' + nome;

boasVindas('Rafael');

const boasVindas = nome => `Seja bem-vindo ${nome}`;

boasVindas('Rafael');