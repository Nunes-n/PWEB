function validar(){
    let nome = document.formulario.elements["txtnome"].value;
    let comentario = document.formulario.elements["txtcomentario"].value;
    let rdbsim = document.getElementById("rdbsim");
    let rdbnao = document.getElementById("rdbnao");

    if (nome.length < 10) {
        alert("O nome deve ter pelo menos 10 caracteres.");
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    if (rdbsim.checked){
        alert("Volte sempre a esta página!");
    }
    else{
        if (rdbnao.checked){
            alert("Que bom que você voltou a visitar esta página!");
        }
        else{
            alert("Selecione uma opção na pesquisa.");
            return false;
        }
    }

    return true;
}