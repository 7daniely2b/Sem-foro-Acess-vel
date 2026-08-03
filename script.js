function mudarSinal(cor) {

    let luzes = document.querySelectorAll(".luz");

    luzes.forEach(function(luz){
        luz.classList.remove("aceso");
    });

    document.getElementById(cor).classList.add("aceso");

    let mensagem = document.getElementById("mensagem");

    if(cor === "vermelho"){
        mensagem.innerHTML = "✋ Pare! Aguarde.";
    }

    else if(cor === "amarelo"){
        mensagem.innerHTML = "⚠ Atenção! Prepare-se.";
    }

    else{
        mensagem.innerHTML = "▶ Siga! Caminho livre.";
    }
}
