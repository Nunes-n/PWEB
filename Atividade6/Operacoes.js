let numero1 = parseFloat(prompt("Insira o primeiro número"));
let numero2 = parseFloat(prompt("Insira o segundo número"));

let soma = numero1 + numero2;
let sub = numero1 - numero2;
let produto;
if (numero1 > numero2){
    produto = numero1 - numero2;
}
else{
    produto = numero2 - numero1;
}
let divisao = numero1 / numero2;
let resto = numero1 % numero2;

alert("soma: " + soma +
        "\nsubtração: " + sub +
        "\nproduto: " + produto +
        "\ndivisão: " + divisao +
        "\nresto: " + resto);