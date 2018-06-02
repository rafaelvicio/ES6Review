//For
var pesoDasMalhas = [12, 32, 21, 29];
var temMalaAcimaDoPesso = false;

for(var i = 0; i < pesoDasMalhas.length; i++){
    if(pesoDasMalhas[i] > 30){
        temMalaAcimaDoPesso = true;
        break;
    }
}

console.log('Tem mala acima do peso: ', temMalaAcimaDoPesso);

//Some
var pesoDasMalhas = [12, 32, 21, 29];

var temMalaAcimaDoPesso = pesoDasMalhas.some(function(pesoDaMala) {
    return pesoDaMala > 30;
})

console.log('Tem mala acima do peso: ', temMalaAcimaDoPesso);
