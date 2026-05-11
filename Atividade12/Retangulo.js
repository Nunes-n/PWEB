function Retangulo(x, y){
    this.x = x;
    this.y = y;
    this.calculaArea = function(){
        return x * y;
    }
}

function calcular(){
    var retangulo = new Retangulo(Number(document.getElementById("x").value), Number(document.getElementById("y").value));
    alert(retangulo.calculaArea() + "cm^2");
}