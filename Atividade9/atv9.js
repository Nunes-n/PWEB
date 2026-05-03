//funcoes 1 e 2
function maior(){
    let numeros = [];

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);

    numeros.push(num1);
    numeros.push(num2);
    numeros.push(num3);

    let maior = 0;

    for (let x = 0; x < numeros.length; x++){
        if (numeros[x] > maior){
            maior = numeros[x];
        }
    }

    alert(maior);
}

function crescente(){
    let numeros = [];

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);

    numeros.push(num1);
    numeros.push(num2);
    numeros.push(num3);

    for(let x = 0; x < numeros.length; x++){
        for(let y = x + 1; y < numeros.length; y++){
            if (numeros[x] > numeros[y]){
                let aux = numeros[x];
                numeros[x] = numeros[y];
                numeros[y] = aux;
            }
        }
    }

    alert(numeros[0] + " " + numeros[1] + " " + numeros[2]);
}

//funcao 3
function palindromo(){
    let str1 = document.getElementById("str1").value;

    str1 = str1.toLowerCase();
    str1 = str1.replace(/\s+/g, "");

    let str2 = str1.split("");
    str2 = str2.reverse();
    str2 = str2.join("");

    if (str1 == str2){
        alert("é um palindromo");
    }
    else {
        alert("não é um palindromo");
    }
}

//funcao 4
function subconjunto(){
    let str1 = document.getElementById("txt1").value;
    let str2 = document.getElementById("txt2").value;

    if (str1 === undefined || str2 === undefined || str1 == "" || str2 == ""){
        alert("erro");
    }
    else{
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();

        if (str1.includes(str2)){
            alert("é um subconjunto");
        }
        else{
            alert("não é um subconjunto");
        }
    }
}

//funcao 5
function dSemana(){
    let data = new Date(document.getElementById("data").value);

    let diaSemana = data.getDay();

    if (diaSemana == 6){
        alert("domingo");
    }
    else{
        if (diaSemana == 5){
            alert("sabado");
        }
        else{
            if (diaSemana == 4){
                alert("sexta-feira");
            }
            else{
                if (diaSemana == 3){
                    alert("quinta-feira");
                }
                else{
                    if (diaSemana == 2){
                        alert("quarta-feira");
                    }
                    else{
                        if (diaSemana == 1){
                            alert("terça-feira");
                        }
                        else{
                            if (diaSemana == 0){
                                alert("segunda-feira");
                            }
                        }
                    }
                }
            }
        }
    }
}