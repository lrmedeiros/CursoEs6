//7º exercício
//Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
//Normal
const nome = 'Diego';
const idade = 23;
//const usuario = {
// nome: nome,
// idade: idade,
// cidade: 'Rio do Sul',
//};
//Object Short Syntax
const usuario = {
    nome,
    idade,
    cidade: 'Rio do Sul',
};
console.log(usuario);