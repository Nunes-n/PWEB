function Transformar(){
    const texto = document.getElementById("texto").value;
    const rdb1 = document.getElementById("rdbMaiusculo");
    const rdb2 = document.getElementById("rdbMinusculo");
    let textoFinal;

    if (rdb1.checked){
        textoFinal = texto.toUpperCase();
    }
    else{
        textoFinal = texto.toLowerCase();
    }

    document.getElementById("textoF").value = textoFinal;
}