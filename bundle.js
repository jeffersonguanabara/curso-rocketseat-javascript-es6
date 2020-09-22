"use strict";

// 4.1 Desestruturação simples
var empresa = {
  nome_fantasia: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome_fantasia = empresa.nome_fantasia,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome_fantasia);
console.log(cidade);
console.log(estado); // 4.2 Desestruturação em parâmetros

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}));
