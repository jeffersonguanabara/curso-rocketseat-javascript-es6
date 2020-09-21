"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = []; // const trabalham = [];

usuarios.map(function (item) {
  idades.push(item.idade);
});
var trabalham = usuarios.filter(function (item) {
  return item.empresa === 'Rocketseat' && item.idade > 18;
});
var trabalham_google = usuarios.find(function (item) {
  return item.empresa === 'Google';
});
console.log(idades);
console.log(trabalham);
console.log(trabalham_google);
usuarios.map(function (item) {
  item.idade *= 2;
});
var filtro = usuarios.filter(function (item) {
  return item.idade <= 50;
});
console.log(filtro);
