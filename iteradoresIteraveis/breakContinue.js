//break
var numeros = [1, 2, 3, 4, 5];
for(var numero of numeros){
    if(numero > 3){
        break;
    }
    console.log('Numero: ', numero);
};

//continua
var numeros = [1, 2, 3, 4, 5];
for(var numero of numeros){
    if(numero === 2){
        continue;
    }
    console.log('Numero: ', numero);
}