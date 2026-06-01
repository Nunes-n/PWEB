const prompt = require('prompt-sync')();
//parenteses indicam que estamos executando a função prompt-sync. Ao
//fazer isso, a função retorna um valor, que é uma nova função que pode ser usada para criar prompt
function saudacao(nome){
    console.log('oi, ' + nome);
}
function entradaNome(callback){ //callback é uma função que é usada como parametro em outra função
    let nome = prompt('digite seu nome: ');
    callback(nome); //chama a função callback (saudação)
}
entradaNome(saudacao);
//obter o nome do usuario atraves de uma caixa de dialogo e,
//em seguida chama callback