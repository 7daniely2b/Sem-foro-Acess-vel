function mudarSinal(cor) {

    let luzes = document.querySelectorAll(".luz");

    luzes.forEach(function(luz){
        luz.classList.remove("aceso");
    });

    document.getElementById(cor).classList.add("aceso");

    let mensagem = document.getElementById("mensagem");

    if(cor === "vermelho"){
        mensagem.innerHTML = "✋ Pare! Não atravesse agora.";
    }

    else if(cor === "amarelo"){
        mensagem.innerHTML = "⚠ Atenção! Aguarde o próximo sinal.";
    }

    else{
        mensagem.innerHTML = "▶ Siga! Pode continuar.";
    }
}
