var map = new Map();
function funcao() {};
var objeto = {};

map.set("string", "sou uma string");
map.set(objeto, "Sou um objeto");
map.set(funcao, "Sou uma função");

console.log('Mapa: ', map);
console.log('Propriedade objeto', map.get(objeto));
console.log('Tamanho', map.size);
console.log('Se tem', map.has("string"));
map.delete("string");
console.log('Mapa depois de remover', map);
map.clear();
console.log('Mapa zerado', map.size);