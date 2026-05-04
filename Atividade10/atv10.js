function imprimeResult(classificacao){
    let r;

    if (classificacao == 1){
        r = "classificação: magreza obesidade: 0";
    }
    else{
        if (classificacao == 2){
            r = "classificação: normal obesidade: 0";
        }
        else{
            if (classificacao == 3){
                r = "classificação: sobrepeso obesidade: I";
            }
            else{
                if (classificacao == 4){
                    r = "classificação: obesidade grau: II";
                }
                else{
                    r = "classificação: obesidade grave grau: III";
                }
            }
        }
    }

    document.getElementById("resultado").textContent = r;
    document.getElementById("resultado").style.color = "rgb(116, 153, 255)";
}

function calcular(){
    let altura = Number(document.getElementById("altura").value);
    let peso = Number(document.getElementById("peso").value);

    let imc = (peso / (altura * altura));

    if (imc < 18.5){
        imprimeResult(1);
    }
    else{
        if (imc < 25){
            imprimeResult(2);
        }
        else{
            if (imc < 30){
                imprimeResult(3);
            }
            else{
                if (imc < 40){
                    imprimeResult(4);
                }
                else{
                    imprimeResult(5);
                }
            }
        }
    }
}