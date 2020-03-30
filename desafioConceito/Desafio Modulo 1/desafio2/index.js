//2º exercício

//A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1 Utilizando o map
//Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

const idade = usuarios.map(item => item.idade);

console.log(idade);

//2.2 Utilizando o filter
//Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos.

const rocketseatMais18 = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade > 18);
console.log(rocketseatMais18);
// saída: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

//2.3 Utilizando o find
//Crie uma variável que procura por um usuário que trabalhe na empresa Google: 
const procuraGoogle = usuarios.find(item => item.empresa === 'Google');
console.log(procuraGoogle);
// saída: undefined

//2.4 Unindo operações
//Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
//no máximo 50 anos:

const idadeMultiplicada = usuarios.map(item => ({ ...item, idade: item.idade * 2 })).filter(item => item.idade <= 50);
console.log(idadeMultiplicada);
// Resultado:
//[
//    { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
//    { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
//]


