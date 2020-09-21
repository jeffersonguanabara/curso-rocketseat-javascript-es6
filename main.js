const usuarios = [
    { nome : 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome : 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome : 'Lucas', idade: 30, empresa: 'Facebook' }
]

const idades = []; 
// const trabalham = [];

usuarios.map(item => { idades.push(item.idade) });

const trabalham = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade > 18);

const trabalham_google = usuarios.find(item => item.empresa === 'Google');

console.log(idades);
console.log(trabalham);
console.log(trabalham_google);

usuarios.map(item => { item.idade *= 2 });

const filtro = usuarios.filter(item => item.idade <= 50 );

console.log(filtro);