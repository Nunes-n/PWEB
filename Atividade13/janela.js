function abrir(){
    document.getElementById("janela").src = "janela-aberta.jpg";
    document.querySelector("h1").textContent = "Janela aberta";
}

function fechar(){
    document.getElementById("janela").src = "janela-fechada.jpg";
    document.querySelector("h1").textContent = "Janela fechada";
}

function quebrar(){
    document.getElementById("janela").src = "janela-quebrada.jpg";
    document.querySelector("h1").textContent = "Janela quebrada";
    document.querySelector("audio").play();
}